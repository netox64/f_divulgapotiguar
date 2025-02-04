"use client";

import { useEffect, useState } from "react";
import { LinkedCard, SearchBar, SpaceY } from "@/components/Atons";
import { CardAnuncio } from "@/components/Cards";
import { useGlobalStore } from "@/store";
import { MiniLayerContent } from "@/components/Layouts";
import { Anuncio } from "@/components/Forms/types-models";
import { getServerSideAnunciosForUsuarioProps } from "@/components/Forms/functions-request";
import { H1 } from "@/components/Atons/Texts";

export const ContentManager = () => {
    const { usuarioId } = useGlobalStore(state => state.usuarioLogado);
    const [anunciosUsuario, setAnunciosUsuario] = useState<Anuncio[]>([]);
    const [valorPesquisado, setvalorPesquisado] = useState<string>('');

    
    useEffect(() => { handleGetAnunciosOfUsuario(usuarioId); }, [usuarioId]);
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
                    <CardAnuncio key={item.anuncioId} title={item.title} body={item.descricao} url={`/anuncios/${item.anuncioId}`} />
                ))
                ) : (
                    <p className="w-full text-center text-blue-400">Você ainda não possui itens anunciados.</p>
                )}
            </div>

            <h2 className="py-5 text-2xl text-slate-500 font-extralight">Informações Gerais</h2>
            <MiniLayerContent>
                <LinkedCard texto="Cadastrar Novo Imovel" destino={"/imoveis/new"} />
                <LinkedCard texto="Criar Anuncio de Imovel" destino={"/anuncios/new"} />
                <LinkedCard texto="Ver Imoveis aprovados" destino={"/"} />
                <SpaceY />
            </MiniLayerContent>
        </div>
    );
};
