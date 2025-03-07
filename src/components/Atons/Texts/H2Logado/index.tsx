import React from "react";

export interface IH2LogadoProps { texto: string; id?: string };

export const H2Logado: React.FC<IH2LogadoProps> = ({ texto, id }) => {
    return (
        <h2 className="text-lg text-blue-500 p-3" id={id}>{texto}</h2>
    );
}