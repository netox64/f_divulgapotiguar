"use client";

import { CardImovel } from "@/components/Cards";
import { Imovel } from "@/components/Forms/types-models";
import { useGlobalStore } from "@/store";
import React, { useEffect } from "react";

export const ContentImoveisUsuario = () => {
    const usuarioLogado = useGlobalStore(state => state.usuarioLogado);
    const imoveis = usuarioLogado.imoveis;

    useEffect(() => { }, [usuarioLogado]);
    return (
        <div className="w-full flex flex-wrap">
            {
                (Array.isArray(imoveis) && imoveis?.length > 0) ? (
                    imoveis.map((imovel: Imovel) => (
                        <CardImovel key={imovel.imovelId} imovel={imovel} />
                    ))
                ) : (<p>carregando</p>)
            }
        </div>
    );
}