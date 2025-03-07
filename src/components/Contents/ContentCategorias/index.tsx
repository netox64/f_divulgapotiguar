"use client";

import React from "react";
import { Container, ContainerCategory } from "@/components/Containers";
import { useGlobalStore } from "@/store";

export const ContentCategorias: React.FC = () => {
    const categorias = useGlobalStore((state) => state.categorias);

    return (
        <div className="w-full min-h-[100vh] flex flex-col">
            {categorias ? (
                <ContainerCategory data={categorias} />
            ) : (
                <p>Não ha nenhuma categoria cadastrada no sistema</p>
            )}
            <div className="w-full">
                <h2 className="text-xl text-center mb-2">
                    {" "}
                    Você é administrador e gostaria criar uma nova categoria ?{" "}
                </h2>
                <Container
                    createUrl={"/categorias/new"}
                    adjetivo={"nova"}
                    recurso={"categoria"}
                />
            </div>
        </div>
    );
};
