"use client";

import { H2 } from "@/components/Atons/Texts";
import { CardAnuncio } from "@/components/Cards";
import { useGlobalStore } from "@/store";
import React, { useEffect } from "react";

export interface IContentAnunciosProps { };

export const ContentAnuncios: React.FC<IContentAnunciosProps> = () => {
    const anuncios = useGlobalStore((state) => state.anuncios);

    
    useEffect(() => { }, [anuncios]);
    return (
        <div className="flex gap-3 flex-col">
            <H2 texto={"Todos os Anúnciados da aplicação"} />
            <div className="flex flex-wrap gap-3 pt-10">
                {anuncios && anuncios.map((anuncio) => (<CardAnuncio key={anuncio.anuncioId} title={anuncio.title} body={anuncio.descricao} url={""} />))}
            </div>
        </div>
    );
}