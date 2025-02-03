"use client";

import { H2 } from "@/components/Atons/Texts";
import { CardImovel } from "@/components/Cards";
import { Imovel } from "@/components/Forms/types-models";
import { useGlobalStore } from "@/store";
import React, { useEffect } from "react";

export const ContentImoveis = () => {
    const imoveis = useGlobalStore(state => state.imoveis);

    
    useEffect(() => { }, [imoveis]);
    return (
        <div className="w-full flex flex-col">
            <H2 texto={"Seus Imoveis contidos na aplicação"} />
            <div className="w-full flex flex-wrap">
                {(Array.isArray(imoveis) && imoveis.length > 0) ? (imoveis.map((imovel: Imovel) => (<CardImovel key={imovel.imovelId} imovel={imovel} />))
                ) : (<p>carregando</p>)}
            </div>
        </div>
    );
}