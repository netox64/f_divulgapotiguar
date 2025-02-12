"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useGlobalStore } from "@/store";
import { AvatarUpdate, AvatarUpdateField, InputCustom, InputRow, SmallButton } from "@/components/Atons";
import Canivete from "@/components/Utils/canivete";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./formupdateusuario-scheme";
import { IUsuarioUpdate } from "@/components/Forms/types-forms";
import { AvatarButtonEditIcon } from "@/components/Atons/Avatars";

interface IimgObjState { file: File | null, fileName: string, imageName: string }
type objectControl = { on: boolean, update: boolean }

export const ContentProfile = () => {
    const router = useRouter();
    const usuario = useGlobalStore(state => state.usuarioLogado);
    const addToUsuarioLogado = useGlobalStore(state => state.addToUsuarioLogado);
    const methods = useForm<IUsuarioUpdate>({ resolver: yupResolver(formSchema), mode: 'onChange', defaultValues: { username: usuario.username, phone: usuario.phone, password: '' } });
    const [image, setControleImage] = useState<IimgObjState>({ file: null, fileName: "Escolher Arquivo", imageName: "avatar.svg" });
    const [control, setControl] = useState<objectControl>({ on: false, update: false });



    useEffect(() => {
        methods.reset({
            ...methods.getValues(), username: usuario.username, phone: usuario.phone, password: '', role: usuario.role, token: usuario.token, notificacoes: [], planos: []
        });

    }, [usuario]);
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setControleImage((prevState) => ({ ...prevState, file: file, fileName: file.name, imageName: URL.createObjectURL(file) }));
            toast.success('Upload de imagem realizado com sucesso!');
        }
    };
    const funcSumissaoForm = async (dados: IUsuarioUpdate) => {
        if (image.file) {
            const formData = new FormData();
            formData.append('file', image.file);
            try {
                const response = await fetch('/api/usuarios/upload', { method: 'POST', body: formData });
                const data = await response.json();
                if (response.status !== 201) { toast.error('Erro ao fazer upload!'); throw new Error(data.error || 'Erro ao fazer upload!'); }
                const responseAtt = await fetch(`http://localhost:3000/api/usuarios/${usuario.usuarioId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username: dados.username, image: data.fileName, phone: dados.phone, password: dados.password } as IUsuarioUpdate),
                });
                if (responseAtt.status === 200) {
                    const data = await responseAtt.json();
                    addToUsuarioLogado(data);
                    // se mudar role temos que -> deslogar, lembrar das permissoes signOut({ callbackUrl: "/" });
                    toast.success('Alterações salvas, quando você deslogar as mudanças serão aplicadas.');
                }
                router.push("/manager");

            } catch (error) {
                toast.error('Erro ao salvar alterações' + String(error));
            }
        }
    };
    const onSubmit: SubmitHandler<IUsuarioUpdate> = (data) => {
        funcSumissaoForm(data);
    };
    const handleModeUpdate = () => { setControl((prev) => ({ on: !prev.on, update: !prev.update })) };
    const handleCancel = useCallback(() => { setControleImage({ file: null, fileName: "Escolher Arquivo", imageName: "avatar.svg" }); setControl((prev) => ({ on: !prev.on, update: !prev.update })); }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-50">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full relative max-w-lg p-8 bg-white shadow-lg text-center rounded-[2.5rem]">
                    <AvatarButtonEditIcon fnClic={handleModeUpdate} />
                    <div className="flex flex-col items-center">
                        <AvatarUpdate preview={image.imageName} modeUpdate={control.update} />
                        <h1 className="mt-4 text-3xl font-extrabold text-teal-700">
                            {control.update ? (<InputCustom name={"username"} label={"username"} />) : (usuario.username)}
                        </h1>
                        <p className="text-gray-500">{usuario.email}</p>
                    </div>
                    {control.update && (
                        <div className="mt-4 text-center">
                            <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700 mb-2">
                                Trocar imagem
                            </label>
                            <div className="relative">
                                <button type="button" className="inline-flex items-center px-6 py-2 text-white bg-teal-600 hover:bg-teal-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50" onClick={() => document.getElementById('image-upload')?.click()}>
                                    {image.fileName}
                                </button>
                                <input type="file" id="image-upload" name="image-upload" accept="image/*" onChange={handleImageChange} className="hidden" />
                            </div>
                        </div>
                    )}
                    <div className="mt-3 bg-gradient-to-r from-slate-100 to-blue-50 rounded-[1.5rem] p-6 shadow-inner space-y-4">
                        {control.update ? (
                            <div className="flex items-center justify-between">
                                <InputRow name={"phone"} label={"Telefone"} />
                            </div>
                        ) : (
                            <AvatarUpdateField textlabel={"Telefone"} textfield={usuario.phone} />
                        )}
                        <AvatarUpdateField textlabel={"Tipo de Usuario"} textfield={(usuario.role?.toUpperCase() === "ADMIN") ? "Administrador" : "Usuario Comum"} />
                        <AvatarUpdateField textlabel={"Conta criada em"} textfield={Canivete.formataDataBr(new Date(usuario.createdAt))} />
                        <AvatarUpdateField textlabel={"Total Notificações"} textfield={usuario.notificacoes?.length.toString() || "0"} />
                        <AvatarUpdateField textlabel={"Total de planos Adquiridos"} textfield={usuario.planos?.length.toString() || "0"} />
                        {control.update ? (
                            <InputCustom name={"password"} type="password" label={"Digite sua senha para confirmar mudanças"} />
                        ) : null}
                    </div>
                    <div className="mt-8 flex justify-center gap-4">
                        <SmallButton label={"Salvar Alterações"} active={control.on} type={"submit"} />
                        <SmallButton label={"Cancelar"} active={control.on} fnClick={handleCancel} />
                    </div>
                </form>
            </FormProvider>
        </div>
    );
}