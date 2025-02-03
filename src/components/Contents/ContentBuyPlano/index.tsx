"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Canivete from "@/components/Utils/canivete";
import { useGlobalStore } from "@/store";
import { InputCpf } from "@/components/Atons";
import { CardCredit, CardPlano } from "@/components/Cards";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { MessageError, postPlano, qrcodeData, reqQrCode } from "@/components/Forms/functions-request";
import { IFormInputPlano } from "@/components/Forms/types-forms";

export const ContentBuyPlano = () => {
    const router = useRouter();
    const usuario = useGlobalStore(state => state.usuarioLogado);
    const addPlanoToUsuarioLogado = useGlobalStore(state => state.addPlanoToUsuarioLogado);
    const planoComprado = useGlobalStore(state => state.planoComprado);

    const addToPlanos = useGlobalStore(state => state.addToPlanos);
    const [paymentMethod, setPaymentMethod] = useState<string>("");
    const [qrCode, setQrCode] = useState<string | null>(null);
    const [pago, setPago] = useState(false);
    const [cpf, setCpf] = useState<string>('');
    const [cpfValid, setCpfValid] = useState<boolean>(true);

    
    useEffect(() => { }, [planoComprado]);

    const handlePaymentMethodChange = (method: string) => {
        setPaymentMethod(method);
        if (method === "pix") { fetchQrCode(); }
    };

    const fetchQrCode = async () => {
        const data = { username: usuario.username, cpf: cpf, valorOriginal: planoComprado?.valor.toString() } as qrcodeData;
        const svg = await reqQrCode(data);
        typeof svg === 'string' ? setQrCode(svg) : toast.error(svg.message);
    };

    const handlePagamentoConfirmado = () => {
        const enviarFormData = async () => {
            const data = { nome: planoComprado?.nome, valor: planoComprado?.valor, quantAnuncio: planoComprado?.quantAnuncio, duracao: planoComprado?.duracao, adquirido: true, usuarioId: usuario.usuarioId } as IFormInputPlano;
            const response = await postPlano(data);
            if (!MessageError.isMessageError(response)) {
                toast.success("plano adquerido!");
                addToPlanos(response);
                addPlanoToUsuarioLogado(response);
                router.push('/adquiridos');
            } else {
                toast.error(response.message);
            }
        }
        enviarFormData();
        setPago(true);
    };

    const handleCpf = (value: string) => {
        setCpf(value);
        setCpfValid(Canivete.validateCpf(value));
    }

    return (
        <div className="w -full min-h-screen bg-gray-50  flex flex-col lg:flex-row gap-3 items-center justify-center">
            {
                planoComprado ? (
                    <CardPlano planoId={planoComprado.planoId} nome={planoComprado.nome} valor={planoComprado.valor} quantAnuncio={0}
                        duracao={0} dataValidade={new Date()} dataAdquerido={new Date()} link={`/planos/${planoComprado.planoId}`} />) :
                    (<p className="text-center text-slate-400 px-10">Carregando...</p>)
            }

            <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 md:p-10">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Pagamento</h1>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-sm font-semibold text-blue-800 mb-4">Insira seu cpf e escolha a forma de pagamento: </h2>
                        {!cpfValid && <p className="text-red-500">CPF inválido!</p>}
                        <div className="space-y-6">
                            <label htmlFor="input-cpf" className="font-bold text-green-700">CPF:
                                <InputCpf value={cpf} onChange={handleCpf} id="input-cpf" />
                            </label>
                            {/* Opção de PIX  Qr Code */}
                            <label className="block border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-gray-500">
                                <input type="radio" name="payment_method" value="pix" className="hidden peer" onChange={() => handlePaymentMethodChange("pix")} />
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
                                        <Image src="/imgs/qr-code.png" width={26} height={26} alt="imagem icone do qrcode, para ser clicado e aparecer o code do pix" />
                                    </div>
                                    <span className="text-gray-700 font-medium peer-checked:text-blue-600">
                                        Pagar com PIX
                                    </span>
                                </div>
                            </label>
                            {!pago && paymentMethod === "pix" && qrCode && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="150" height="150">
                                            <div dangerouslySetInnerHTML={{ __html: qrCode }} />
                                        </svg> */}
                                        <img src={qrCode} width={150} height={150} alt="imagem icone do qrcode, para ser clicado e aparecer o code do pix" />
                                        <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition" onClick={handlePagamentoConfirmado}>
                                            Confirmar Pagamento
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Opção de Cartão */}
                            <label className="block border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-gray-500">
                                <input type="radio" name="payment_method" value="card" className="hidden peer" onChange={() => handlePaymentMethodChange("card")} />
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
                                        <Image src="/imgs/card-credit.png" width={26} height={26} alt="imagem icone do cartão de credito, para ser clicado e aparecer formulário" />
                                    </div>
                                    <span className="text-gray-700 font-medium peer-checked:text-blue-600">
                                        Pagar com Cartão
                                    </span>
                                </div>
                            </label>
                            {!pago && paymentMethod === "card" && (
                                <div>
                                    <CardCredit />
                                    <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                                        Confirmar Pagamento
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Resumo do Pedido */}
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">
                            Resumo do Pedido
                        </h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Plano de anúncios {planoComprado?.nome}</span>
                                <span className="font-semibold text-gray-800">R$ {planoComprado?.valor}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Taxa</span>
                                <span className="font-semibold text-gray-800">R$ 0,00</span>
                            </div>
                            <hr className="my-4 border-gray-300" />
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold text-gray-800">Total</span>
                                <span className="text-lg font-semibold text-blue-600">
                                    R$ {planoComprado?.valor}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}