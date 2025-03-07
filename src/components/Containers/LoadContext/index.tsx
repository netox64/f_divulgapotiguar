"use client";

import React, { ReactNode, useEffect } from "react";
import * as service from "@/components/Forms/functions-request";
import { Anuncio, Categoria, Feedback, Imovel, Notificacao, Pagamento, Plano, Usuario } from "@/components/Forms/types-models";
import { useGlobalStore } from "@/store";

export interface ILoadContextProps { children: ReactNode; }

export const LoadContext: React.FC<ILoadContextProps> = ({ children }) => {
    const setUsuario = useGlobalStore((state) => state.addToUsuarioLogado);
    const pushImoveis = useGlobalStore((state) => state.initStateImoveis);
    const pushAnuncios = useGlobalStore((state) => state.initStateAnuncios);
    const pushCategorias = useGlobalStore((state) => state.initStateCategorias);
    const pushUsuarios = useGlobalStore((state) => state.initStateUsuarios);
    const pushPlanos = useGlobalStore((state) => state.initStatePlanos);
    const pushPagamentos = useGlobalStore((state) => state.initStatePagamentos);
    const pushNotificacoes = useGlobalStore((state) => state.initStateNotificacoes);
    const pushFeedbacks = useGlobalStore((state) => state.initStateFeedbacks);

    const loadUsuarioLogado = async () => {
        const response = await fetch("http://localhost:3000/api/usuarios/email");
        const usuario: Usuario = await response.json();
        if (response.ok && usuario) {
            setUsuario(usuario);
        }
    };

    const loadData = async () => {
        try {
            const [imoveis, anuncios, categorias, usuarios, planos, pagamentos, notificacoes, feedbacks] = await Promise.all([
                service.getAllResources<Imovel>("imoveis"),
                service.getAllResources<Anuncio>("anuncios"),
                service.getAllResources<Categoria>("categorias"),
                service.getAllResources<Usuario>("usuarios"),
                service.getAllResources<Plano>("planos"),
                service.getAllResources<Pagamento>("pagamentos"),
                service.getAllResources<Notificacao>("notificacoes"),
                service.getAllResources<Feedback>("feedbacks"),
            ]);

            if (Array.isArray(imoveis)) pushImoveis(imoveis);
            if (Array.isArray(anuncios)) pushAnuncios(anuncios);
            if (Array.isArray(categorias)) pushCategorias(categorias);
            if (Array.isArray(usuarios)) pushUsuarios(usuarios);
            if (Array.isArray(planos)) pushPlanos(planos);
            if (Array.isArray(pagamentos)) pushPagamentos(pagamentos);
            if (Array.isArray(notificacoes)) pushNotificacoes(notificacoes);
            if (Array.isArray(feedbacks)) pushFeedbacks(feedbacks);
        } catch (error) {
            console.error("Erro ao carregar dados:", error);
        }
    };

    useEffect(() => {loadUsuarioLogado().then(() => loadData());}, []);

    return <>{children}</>;
};
