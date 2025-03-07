"use client";
import React, { Component } from "react";
import { Imovel } from "@/components/Forms/types-models";
import { Container } from "@/components/Containers";
import { CardImovel } from "..";

interface ImovelProps { imovel: Imovel; }

export class CardImovelManager extends Component<ImovelProps> {
    render() {
        const { imovel } = this.props;
        const extraContent = (<Container updateUrl={`/imoveis/${imovel.imovelId}/update`} deleteUrl={`/imoveis/${imovel.imovelId}/delete`} adjetivo={"novo"} recurso={"imovel"} />);
        return <CardImovel imovel={imovel} extraContent={extraContent} />;
    }
}
