"use client";
import React, { Component } from "react";
import Image from "next/image";
import { Imovel } from "@/components/Forms/types-models";

interface CardImovelBaseProps {
    imovel: Imovel;
    extraContent?: React.ReactNode;
}

export class CardImovel extends Component<CardImovelBaseProps> {
    render() {
        const { imovel, extraContent } = this.props;

        return (
            <div className="max-w-7xl m-2 p-3 bg-slate-50 shadow-lg rounded-lg">
                <div className="max-w-[700px] max-h-[320px] overflow-hidden">
                    <Image src={imovel.imagemImovel ? `/uploads/imoveis/${imovel.imagemImovel}` : `/imgs/imgs_default.svg`} alt={imovel.nome} width={700} height={320}/>
                </div>
                <h2 className="text-3xl font-bold mt-4">{imovel.nome}</h2>
                <p className="text-gray-600 text-lg">{imovel.localizacao}</p>
                <p className="mt-4 text-gray-700">{imovel.sobre}</p>
                <div className="mt-4 flex flex-wrap gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm">{imovel.tipo}</span>
                    <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm">
                        Área: {imovel.areaCalculada}m²
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm">
                        {imovel.comprimento}m x {imovel.largura}m
                    </span>
                    <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg text-sm">{imovel.status}</span>
                </div>
                {extraContent} {/* Renderiza o conteúdo extra, se fornecido */}
            </div>
        );
    }
}
