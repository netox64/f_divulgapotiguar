import React from "react";

export interface IH1Props { texto: string; };

export const H1: React.FC<IH1Props> = ({ texto }) => {
    return (
        <h1 className="text-2xl font-bold py-5 text-center">{texto}</h1>
    );
}