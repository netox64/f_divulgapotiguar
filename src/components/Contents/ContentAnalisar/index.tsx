"use client";
import React, { useEffect, useState, useRef } from "react";
import { ButtonRounded } from "@/components/Atons";
import { CardBasic } from "@/components/Cards";
import { Avalicacao, Imovel, Status } from "@/components/Forms/types-models";
import { filterImovelStatusForAnalise } from "@/components/Utils/filters";
import { useGlobalStore } from "@/store";
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import { toast } from "react-toastify";
import { GraphLines } from "@/components/Atons/Graph";
import { H2, PLimited } from "@/components/Atons/Texts";
import { IFormImovelUpdate } from "@/components/Forms/types-forms";
import { useRouter } from "next/navigation";

GlobalWorkerOptions.workerSrc = "/pdfjs/build/pdf.worker.mjs";

export const ContentAnalisar = () => {
    const usuarioLogado = useGlobalStore(state => state.usuarioLogado);
    const imoveis = filterImovelStatusForAnalise(useGlobalStore(state => state.imoveis));
    const removeToImoveis = useGlobalStore(state => state.removeToImoveis);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [selectedId, setSelectedId] = useState<number>();
    const [textDocs, setTextDocs] = useState<string>('');
    const [pdfUrl, setPdfUrl] = useState<string>('');
    const [avalicao, setAvaliacao] = useState<Avalicacao>({ quantVerificacao: 0, quantAcerto: 0, indiceConfiabilidade: 0 });
    const router = useRouter();

    useEffect(() => {
        return () => { if (pdfUrl) { URL.revokeObjectURL(pdfUrl); } };
    }, [usuarioLogado, imoveis, pdfUrl, avalicao]);

    const handleSelectImovel = (id: number) => {
        setSelectedId(id);
    };

    const renderPdf = async (url: string) => {
        const loadingTask = getDocument(url);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext("2d");
            if (context) {
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                await page.render({ canvasContext: context, viewport }).promise;
            }
        }
    };

    const extrairPdf = async (imovelId: number) => {
        const response = await fetch(`http://localhost:3000/api/imoveis/${imovelId}/txt`);
        const tarefaId = await response.json();

        if (response.ok) {
            toast.success("Processamento de dados iniciado, aguarde um pouco até o texto ser extraido e a análise ficar pronta.");
            let polling = true;
            const checkStatus = async () => {
                if (!polling) return;
                const statusResponse = await fetch(`http://localhost:3000/api/imoveis/${tarefaId}/processamento`);
                if (statusResponse.ok) {
                    const data = await statusResponse.json();
                    if (data.status === "CONCLUIDO") {
                        setTextDocs(data.resultado);
                        toast.success("Análise concluída!");
                        polling = false;
                    } else {
                        setTimeout(checkStatus, 2000);
                    }
                } else {
                    toast.error("Erro ao verificar o status do processamento.");
                    polling = false;
                }
            };
            checkStatus();
        }
        const responseAvalicao = await fetch(`http://localhost:3000/api/imoveis/${imovelId}/getevaluation`);
        if (responseAvalicao.ok) {
            const avaliacao: Avalicacao = await responseAvalicao.json();
            setAvaliacao(avaliacao);
        }
    };

    const buscarAnalisarDocumento = () => {
        const buscarPdf = async (imovelId: number) => {
            const pdfArquivo = await fetch(`http://localhost:3000/api/imoveis/${imovelId}/docs`);
            if (pdfArquivo.ok) {
                const blob = await pdfArquivo.blob();
                const url = URL.createObjectURL(blob);
                setPdfUrl(url);
                renderPdf(url);
            } else {
                toast.error("Erro ao buscar o PDF");
            }
        };

        if (selectedId !== undefined) { buscarPdf(selectedId); }
    };

    const buscarOrientacao = () => {
        if (selectedId !== undefined) { extrairPdf(selectedId); }
    };

    const handleUpdate = async (sts: Status) => {
        const data: IFormImovelUpdate = { status: sts };
        const response = await fetch(`http://localhost:3000/api/imoveis/${selectedId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            toast.success("validação realizada.");
            if (selectedId) {
                removeToImoveis(selectedId);
            }
            router.push("/manager");
        }
    };

    return (
        <div className="w-full flex-col p-4">
            <div className="w-full flex gap-4 mt-5 flex-wrap">
                {imoveis && imoveis.length > 0 ? (
                    imoveis.map((imovel: Imovel) => (
                        <CardBasic key={imovel.imovelId} id={imovel.imovelId} title={imovel.nome} image={imovel.imagemImovel} checked={selectedId === imovel.imovelId} fnCheck={handleSelectImovel}>
                            <PLimited texto={imovel.sobre} />
                        </CardBasic>
                    ))
                ) : (
                    <p className="w-full text-center text-gray-600">Não há imóveis para serem analisados no sistema.</p>
                )}
            </div>
            <ButtonRounded label={"Buscar Documento"} color={"green"} fnClick={buscarAnalisarDocumento} />

            <div className="mt-6">
                <H2 texto={"O documento atrelado ao imóvel"} />
                <div className="mt-2">
                    {pdfUrl ? (
                        <canvas ref={canvasRef} className="w-full h-auto border rounded-lg shadow-md" />
                    ) : (
                        <p className="text-center text-gray-500">Documento PDF não encontrado ou em processamento...</p>
                    )}
                </div>
            </div>
            <ButtonRounded label={"Buscar Analise de texto"} color={"green"} fnClick={buscarOrientacao} />
            <div className="mt-6">
                <H2 texto={"Os valores referentes ao imóvel que batem com a descrição cadastrada no sistema"} />
                <div className="mt-2 p-4 bg-gray-50 border rounded-lg shadow-sm">
                    {textDocs ? (
                        <div dangerouslySetInnerHTML={{ __html: textDocs }} />) : (
                        <p className="text-center text-gray-500">Texto do imóvel não encontrado ou em processamento...</p>
                    )}
                </div>
            </div>
            <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">Grafico</h3>
                <div className="flex flex-col items-center  justify-center">
                    <GraphLines data={avalicao} />
                </div>
            </div>
            <div className="w-full m-5 flex gap-5 items-center justify-center">
                <ButtonRounded label={"Recusar"} color={"red"} fnClick={() => handleUpdate("ANALISADO")} />
                <ButtonRounded label={"Validar"} color={"blue"} fnClick={() => handleUpdate("INVALIDO")} />
            </div>
        </div>
    );
};