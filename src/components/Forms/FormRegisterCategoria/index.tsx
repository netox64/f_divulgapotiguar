"use client";

import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { MessageError, postCategoria } from "../functions-request";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { InputCustom } from "@/components/Atons";
import { IFormInputCategoria } from "../types-forms";
import { formSchema } from "./formlogin-scheme";
import { yupResolver } from '@hookform/resolvers/yup';
import { useGlobalStore } from "@/store";

export const FormRegisterCategoria = () => {
    const addToCategorias = useGlobalStore(state => state.addToCategorias);
    const router = useRouter();
    const methods = useForm<IFormInputCategoria>({
        resolver: yupResolver(formSchema), mode: 'onChange',
        defaultValues: { nome: '', descricao: '' }
    });

    const onSubmit: SubmitHandler<IFormInputCategoria> = async (data) => {

        const response = await postCategoria(data);
        if (!MessageError.isMessageError(response)) {
            addToCategorias(response);
            toast.success("categoria criada !");
            router.push('/categorias');
        } else {
            toast.error(response.message);
        }

    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4 p-6 bg-white rounded-md w-full mx-auto">
                <InputCustom name="nome" label="Nome" required={true} />
                <InputCustom name="descricao" label="Descrção" required={true} />
                <div className="flex justify-center items-center">
                    <button type="submit" className="w-24 p-2 bg-green-700 text-white rounded-md hover:bg-green-600">Criar</button>
                </div>
            </form>
        </FormProvider>
    );
}