"use client";

import { H1, PLimited } from "@/components/Atons/Texts";
import { CardBasic } from "@/components/Cards";
import { Imovel } from "@/components/Forms/types-models";
import { useGlobalStore } from "@/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ContentSubmissao = ({ }) => {
    const router = useRouter();
    const usuarioLogado = useGlobalStore(state => state.usuarioLogado);
    const imoveis = usuarioLogado?.imoveis?.filter((imovel: Imovel) => imovel.status === "PENDENTE");
    const [imovelSelecionado, setImovelSelecionado] = useState<number>();
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);



    useEffect(() => { }, [usuarioLogado, imoveis]);
    const handleSelectImovel = (id: number) => {
        setImovelSelecionado(id);
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };
    const handleUpload = async () => {
        if (!file || !imovelSelecionado) {
            toast.error("Selecione um imóvel e um arquivo antes de enviar.");
            return;
        }
        setUploading(true);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("imovelId", String(imovelSelecionado));

        try {
            const response = await fetch("http://localhost:3000/api/uploadpdf", {
                method: "POST",
                body: formData,
            });
            if (response.ok) {
                toast.success("enviado com sucesso!");
                router.push("/manager");
            } else {
                toast.error("Erro ao enviar arquivo");
            }
        } catch (error) {
            console.error("Erro ao enviar arquivo:", error);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="w-full flex flex-col">
            <H1 texto={"Seus imóveis não validados que deverão ser submetidos à validação"} />
            <div className="w-full flex gap-2 flex-wrap">
                {imoveis && imoveis?.length > 0 ? (
                    imoveis.map((imovel: Imovel) => (
                        <CardBasic key={imovel.imovelId} id={imovel.imovelId} title={imovel.nome} image={imovel.imagemImovel}
                            checked={imovelSelecionado === imovel.imovelId} fnCheck={handleSelectImovel}>
                            <PLimited texto={imovel.sobre} />
                        </CardBasic>
                    ))
                ) : (
                    <p className="w-full text-center">Você não possui imóveis cadastrados no sistema.</p>
                )}
            </div>
            <div className="w-full flex flex-col mt-4">
                <input type="file" accept="application/pdf" onChange={handleFileChange} />
                <button onClick={handleUpload} disabled={uploading} className="mt-2 p-2 bg-blue-500 text-white rounded">
                    {uploading ? "Enviando..." : "Enviar PDF"}
                </button>
            </div>
        </div>
    );
}
