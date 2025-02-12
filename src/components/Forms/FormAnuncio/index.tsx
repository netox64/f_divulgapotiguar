"use client";

import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { InputCustom } from '@/components/Atons';
import { useEffect } from 'react';
import { formSchema } from './formregister-scheme';
import { useGlobalStore } from '@/store';
import { IFormAnuncio } from '../types-forms';
import { MessageError, postAnuncio } from '../functions-request';
import Canivete from '@/components/Utils/canivete';

export interface IFormAnunucioProps { imovelId: number; planoId: number; imagem: string; categoriasIds?: number[]; };
type inputField = { name: string, label: string };

export const FormAnunucio: React.FC<IFormAnunucioProps> = ({ imovelId, planoId, imagem, categoriasIds }) => {
    const router = useRouter();
    const { usuarioId } = useGlobalStore(state => state.usuarioLogado);
    const addAnuncioToUsuarioLogado = useGlobalStore(state => state.addAnuncioToUsuarioLogado);
    const addToAnuncios = useGlobalStore(state => state.addToAnuncios);

    const methods = useForm<IFormAnuncio>({
        resolver: yupResolver(formSchema), mode: 'onChange',
        defaultValues: { title: '', descricao: '', imagemPropaganda: imagem, tipoPagamento: '', preco: 0, imovelId: imovelId, planoId: planoId, categoriasIds: categoriasIds, usuarioId: usuarioId }
    });
    const arrayinputField = [
        { name: "title", label: "titulo" },
        { name: "descricao", label: "descrição" },
        { name: "imagemPropaganda", label: "imagem propaganda" },
        { name: "tipoPagamento", label: "tipo de pagamento aceito pelo proprietário" },
        { name: "preco", label: "preço cobrado pelo proprietário" },
    ] as inputField[];

    useEffect(() => {
        methods.reset({
            ...methods.getValues(), imovelId: imovelId, planoId: planoId, imagemPropaganda: imagem, categoriasIds: categoriasIds || [], usuarioId: usuarioId,
        });

    }, [imovelId, usuarioId, planoId, categoriasIds, methods]);

    const onSubmit = async (data: IFormAnuncio) => {
        const response = await postAnuncio(data);
        if (!MessageError.isMessageError(response)) {
            addToAnuncios(response);
            addAnuncioToUsuarioLogado(response);
            toast.success("anuncio criado !");
            router.push('/anuncios');
        } else {
            toast.error(response.message);
        }
    };
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4 p-6 bg-white rounded-md w-full mx-auto">
                {arrayinputField.map((inputField) => {
                    return <InputCustom name={inputField.name} label={Canivete.captalizeFirstLetter(inputField.label)} required={true} />;
                })}
                <InputCustom name="imovelId" label="" required={false} ishidden={true} />
                <InputCustom name="planoId" label="" required={false} ishidden={true} />
                <InputCustom name="usuarioId" label="" required={false} ishidden={true} />
                <InputCustom name="categoriasIds" label="Categorias relacionadas" required={false} ishidden={true} />
                <div className="flex justify-center items-center">
                    <button type="submit" className="w-24 p-2 bg-green-700 text-white rounded-md hover:bg-green-600">Criar</button>
                </div>
            </form>
        </FormProvider>
    );
}