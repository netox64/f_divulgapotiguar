"use client";

import { useEffect, useState } from "react";
import { LinkedCard, SearchBar, SpaceY } from "@/components/Atons";
import { CardAnuncio } from "@/components/Cards";
import { useGlobalStore } from "@/store";
import { MiniLayerContent } from "@/components/Layouts";
import { Anuncio } from "@/components/Forms/types-models";
import { getServerSideAnunciosForUsuarioProps } from "@/components/Forms/functions-request";
import { H1 } from "@/components/Atons/Texts";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

export const ContentManager = () => {
    const searchParams = useSearchParams();
    const error = searchParams.get("error");

    const { usuarioId } = useGlobalStore(state => state.usuarioLogado);
    const [anunciosUsuario, setAnunciosUsuario] = useState<Anuncio[]>([]);
    const [valorPesquisado, setvalorPesquisado] = useState<string>('');



    useEffect(() => {
        if (error) {
            switch (error) {
                case "not_has_token":
                    toast.error("Você não deveria nem estar aqui bixo, está sem token de acesso.");
                    break;
                case "invalid_token":
                    toast.error("Token inválido é de 1500 A.C");
                    break;
                case "invalid_role":
                    toast.error("Você não é ADMIN major, não pode acessar isso aí não.");
                    break;
                default:
                    toast.error("Ocorreu um erro desconhecido.");
            }
        }

        handleGetAnunciosOfUsuario(usuarioId);
    }, [usuarioId, error]);
    const handleGetAnunciosOfUsuario = async (usuarioId: string) => {
        const list = await getServerSideAnunciosForUsuarioProps(usuarioId);
        if (Array.isArray(list)) { setAnunciosUsuario(list); }
    };
    const handleSearch = (pesquisa: string) => { setvalorPesquisado(pesquisa); };
    const handlerFiltered = (): Anuncio[] => {
        if (valorPesquisado && anunciosUsuario.length > 0) {
            return anunciosUsuario.filter((item) =>
                item.title.toLowerCase().includes(valorPesquisado.toLowerCase())
            );
        }
        return anunciosUsuario;
    };

    return (
        <div className="w-full h-full flex flex-col items-center">
            <SearchBar onSearch={handleSearch} />
            <H1 texto={"Seus imóveis anunciados"} />
            <div className="w-full h-auto gap-5 flex flex-wrap">
                {handlerFiltered().length > 0 ? (handlerFiltered().map((item: Anuncio) => (
                    <CardAnuncio key={item.anuncioId} title={item.title} img={item.imovel?.imagemImovel} body={item.descricao} url={`/anuncios/${item.anuncioId}`} />
                ))
                ) : (
                    <p className="w-full text-center text-blue-400">Você ainda não possui itens anunciados.</p>
                )}
            </div>

            <h2 className="py-5 text-2xl text-slate-500 font-extralight">Informações Gerais</h2>
            <MiniLayerContent>
                <LinkedCard texto="Cadastrar Imóvel" destino={"/imoveis/new"} />
                <LinkedCard texto="Submeter imóvel / aprovação" destino={"/submissao"} />
                <LinkedCard texto="Ver Imóveis aprovados" destino={"/imoveis/aprovados"} />
                <LinkedCard texto="Criar anúncio do Imóvel" destino={"/anuncios/new"} />
                <SpaceY />
            </MiniLayerContent>
        </div>
    );
};
