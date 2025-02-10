"use client";
import { H2 } from "@/components/Atons/Texts";
import { CardImovel } from "@/components/Cards";
import { Imovel } from "@/components/Forms/types-models";
import { filterImovelStatusAnalisados } from "@/components/Utils/filters";
import { useGlobalStore } from "@/store";
import React from "react";

export const ContentAprovadosUsuario = () => {
    const usuarioLogado = useGlobalStore(state => state.usuarioLogado);
    const imoveis = filterImovelStatusAnalisados(usuarioLogado.imoveis);
    return (
        <div className="w-full">
            <H2 texto={"Imoveis verificados e aprovados"} />
            <div className="w-full flex flex-wrap">
                {(Array.isArray(imoveis) && imoveis.length > 0) ? (imoveis.map((imovel: Imovel) => (<CardImovel key={imovel.imovelId} imovel={imovel} />))
                ) : (<p>Você não possui imoveis na condição de verificado e aprovado por enquanto.</p>)}
            </div>

        </div>
    );
}