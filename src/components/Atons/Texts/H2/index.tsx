import React from "react";

export interface IH2Props { texto: string; id?: string };

export const H2: React.FC<IH2Props> = ({ texto, id }) => {
    return (
        <h2 className="md:text-xl lg:text-2xl text-center text-wrap font-semibold text-gray-700 p-2" id={id}>{texto}</h2>
    );
}