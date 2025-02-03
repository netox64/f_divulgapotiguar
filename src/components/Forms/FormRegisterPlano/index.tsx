"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { MessageError, postPlano } from "../functions-request";
import { toast } from "react-toastify";
import { InputCustom } from "@/components/Atons";
import { yupResolver } from '@hookform/resolvers/yup';
import { IFormInputPlano } from "../types-forms";
import { formSchema } from "./formlogin-scheme";
import { useGlobalStore } from "@/store";

export const FormRegisterPlano = () => {
    const router = useRouter();
    const { usuarioId } = useGlobalStore(state => state.usuarioLogado);
    const addToPlanoComprado = useGlobalStore(state => state.addToPlanoComprado);
    const addToPlanos = useGlobalStore(state => state.addToPlanos);
    const addPlanoToUsuarioLogado = useGlobalStore(state => state.addPlanoToUsuarioLogado);
    const methods = useForm<IFormInputPlano>({ resolver: yupResolver(formSchema), mode: 'onChange', defaultValues: { nome: '', valor: 0, quantAnuncio: 0, duracao: 0, adquirido: false, usuarioId: usuarioId } });



    const onSubmit: SubmitHandler<IFormInputPlano> = async (data) => {
        const response = await postPlano(data);
        if (!MessageError.isMessageError(response)) {
            toast.success("plano criado!");
            addToPlanos(response);
            addPlanoToUsuarioLogado(response);
            // addToPlanoComprado(response);
            router.push('/planos');
        } else {
            toast.error(response.message);
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4 p-6 bg-white rounded-md w-full mx-auto">
                <InputCustom name="nome" label="Nome" required={true} />
                <InputCustom name="valor" label="Valor do plano" required={true} />
                <InputCustom name="quantAnuncio" label="Quantidade de anuncio para este Plano" required={true} />
                <InputCustom name="duracao" label="Duração" required={true} />
                <InputCustom name="adquirido" label="Adquirido" required={true} ishidden={true} />
                <InputCustom name="usuarioId" label="Usuario" required={true} />
                <div className="flex justify-center items-center">
                    <button type="submit" className="w-24 p-2 bg-green-700 text-white rounded-md hover:bg-green-600">Criar</button>
                </div>
            </form>
        </FormProvider>
    );
}