"use client";

import React, { useEffect } from "react";
import { H2Logado } from "@/components/Atons";
import { MessageError } from "@/components/Forms/functions-request";
import { useGlobalStore } from "@/store";
import { Plano } from "@/components/Forms/types-models";
import { CardPlano } from "@/components/Cards";

export const ContentAdquiridos = () => {
    const usuarioLogado = useGlobalStore(state => state.usuarioLogado);
    const planos = usuarioLogado.planos;

    useEffect(() => { }, [usuarioLogado]);
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <H2Logado texto="Seus Planos presentes na Aplicação" />
            <div className="w-full flex flex-row gap-3 flex-wrap">
                {!MessageError.isMessageError(planos) && planos?.length > 0 ? (
                    planos.map((plano: Plano) => (
                        <CardPlano key={plano.planoId} planoId={plano.planoId} nome={plano.nome} valor={plano.valor} quantAnuncio={plano.quantAnuncio} duracao={plano.duracao} dataValidade={new Date()} dataAdquerido={new Date()}
                        />
                    ))
                ) : (
                    <p className="text-center">Você não adquiriu nenhum plano ainda no sistema</p>
                )}
            </div>
        </div>
    );
};
