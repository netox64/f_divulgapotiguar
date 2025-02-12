"use client";

import { useForm, FormProvider } from 'react-hook-form';
import { ImageUploader, InputCustom } from '@/components/Atons';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './formregister-scheme';
import { toast } from 'react-toastify';
import { useGlobalStore } from '@/store';
import { IFormImovel } from '../types-forms';
import { MessageError, postImovel } from '../functions-request';

export const FormRegisterImovel = () => {
    const addToImoveis = useGlobalStore(state => state.addToImoveis);
    const addImovelToUsuarioLogado = useGlobalStore(state => state.addImovelToUsuarioLogado);
    const usuario = useGlobalStore(state => state.usuarioLogado);
    const router = useRouter();
    const methods = useForm<IFormImovel>({
        resolver: yupResolver(formSchema), mode: 'onChange', defaultValues: { nome: '', localizacao: '', comprimento: 1, largura: 1, imagem: '', tipo: '', sobre: '', usuarioId: usuario.usuarioId }
    });

    const onSubmit = async (data: IFormImovel) => {
        const response = await postImovel(data);
        if (!MessageError.isMessageError(response)) {
            addImovelToUsuarioLogado(response);
            addToImoveis(response);
            toast.success("imóvel criado !");
            router.push('/manager');
        } else {
            toast.error(response.message);
        }
    };

    const handleImageUpload = async (file: File): Promise<string> => {
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            try {
                const response = await fetch('/api/imoveis/upload', { method: 'POST', body: formData });
                const data = await response.json();
                if (response.status === 201) {
                    const pathArray = data.filePath.split(/[/\\]/);
                    methods.setValue("imagem", pathArray[pathArray.length - 1]);
                    return data.filePath;
                } else {
                    throw new Error(data.error || 'Erro ao fazer upload!');
                }
            } catch (error) {
                toast.error('Erro ao fazer upload!');
                throw error;
            }
        }
        else {
            toast.error('Nenhum arquivo foi passado para o upload');
            return '';
        }
    };

    return (
        <>
            <ImageUploader onUpload={handleImageUpload} />
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4 p-6 bg-white rounded-md w-full mx-auto">
                    <InputCustom name="nome" label="Nome" required={true} />
                    <InputCustom name="localizacao" label="Localização" required={true} />
                    <InputCustom name="comprimento" label="Comprimento" required={true} />
                    <InputCustom name="largura" label="Largura" required={true} />
                    <InputCustom name="tipo" label="Tipo" required={true} />
                    <InputCustom name="sobre" label="Sobre" required={true} />
                    <InputCustom name="imagem" label="Imagem do Imovel" required={true} />
                    <InputCustom name="usuarioId" required={true} label={'id do usuario'} />
                    <div className="flex justify-center items-center">
                        <button type="submit" className="w-24 p-2 bg-green-700 text-white rounded-md hover:bg-green-600">Cadastrar</button>
                    </div>
                </form>
            </FormProvider>
        </>
    );
};
