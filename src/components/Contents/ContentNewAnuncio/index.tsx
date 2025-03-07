"use client";

import React, { useEffect, useState } from "react";
import { CardBasic, CardSelectRoundedPlano } from "@/components/Cards";
import { useGlobalStore } from "@/store";
import { FormAnunucio } from "@/components/Forms";
import { Categoria, Imovel, Plano } from "@/components/Forms/types-models";
import { getAllResources, getServerSideImoveisForUsuarioProps, getServerSidePlanosForUsuarioProps } from "@/components/Forms/functions-request";
import { CategoriaSelector } from "@/components/Containers";
import { PLimited } from "@/components/Atons/Texts";

export const ContentNewAnuncio = () => {
    const usuario = useGlobalStore(state => state.usuarioLogado);
    const [imoveis, setImoveis] = useState<Imovel[]>([]);
    const [planos, setPlanos] = useState<Plano[]>([]);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [imagem, setImagem] = useState<string>('');
    const [selectedIdCategoria, setSelectedIdCategoria] = useState<number[]>([]);
    const [selectedIdPlano, setSelectedIdPlano] = useState<number>(0);
    const [selectedId, setSelectedId] = useState<number>(0);

    
    useEffect(() => {
        const fetchImoveis = async () => {
            const imoveis = await getServerSideImoveisForUsuarioProps(usuario.usuarioId);
            if (Array.isArray(imoveis)) setImoveis(imoveis);
        };
        const fetchCategorias = async () => {
            const categorias = await getAllResources<Categoria>("categorias");
            if (Array.isArray(categorias)) setCategorias(categorias);
        };
        const fetchPlanos = async () => {
            const planos = await getServerSidePlanosForUsuarioProps(usuario.usuarioId);
            if (Array.isArray(planos)) {
                setPlanos(planos.filter((plano) => plano.adquirido === true && plano.quantAnuncio > 0));
            }
        };
        fetchImoveis();
        fetchCategorias();
        fetchPlanos();
    }, [usuario.usuarioId]);

    const handleSelectImovel = (id: number) => {
        setSelectedId(id);
        setImagem(pickImage(id));
    };
    const handleSelectPlano = (id: number) => {
        setSelectedIdPlano(id);
    };

    const pickImage = (id: number): string => {
        const imovel = imoveis.find((imovel) => imovel.imovelId === id);
        return imovel ? imovel.imagemImovel : '';
    }

    return (
        <div className="w-full min-h-[100vh]">
            <div className="w-full flex gap-4 mt-5 flex-wrap">
                {imoveis && imoveis?.length > 0 ? (
                    imoveis.map((imovel: Imovel) => (
                        <CardBasic key={imovel.imovelId} image={imovel.imagemImovel} id={imovel.imovelId}  title={imovel.nome} checked={selectedId === imovel.imovelId} fnCheck={handleSelectImovel}>
                            <PLimited texto={imovel.sobre} />
                        </CardBasic>
                    ))
                ) : (
                    <p className="w-full text-center">Você não possui imóveis cadastrados no sistema.</p>
                )}
            </div>
            <CategoriaSelector categorias={categorias} selectedCategorias={selectedIdCategoria} onCategoriaChange={setSelectedIdCategoria} />
            <h2 className="p-5 text-xl font-semibold text-blue-500 text-center">Seus planos disponiveis para vincular esse anúncio.</h2>

            <div className="w-full flex gap-4 mt-5 items-center justify-center flex-wrap">
                {planos && planos?.length > 0 ? (
                    planos.map((plano: Plano) => (
                        <CardSelectRoundedPlano key={plano.planoId} id={plano.planoId} title={plano.nome} checked={selectedIdPlano === plano.planoId} fnCheck={handleSelectPlano}>

                            <p><span className="font-bold text-red-700">1</span> de <em className="font-bold text-green-700">{plano.quantAnuncio}</em></p>

                        </CardSelectRoundedPlano>
                    ))
                ) : (
                    <p className="w-full text-center">Você não adquiriu nenhum plano ainda.</p>
                )}
            </div>
            <FormAnunucio imovelId={selectedId} imagem={imagem} categoriasIds={selectedIdCategoria} planoId={selectedIdPlano} />
        </div>
    );
}
