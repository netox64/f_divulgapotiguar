import Canivete from "@/components/Utils/canivete";
import React from "react";

export interface IPLimitedProps { texto: string; };

export const PLimited: React.FC<IPLimitedProps> = ({ texto }) => {
    return (
        <p className="m-1 font-normal text-sm text-gray-500 text-wrap">
            {Canivete.captalizeLimitText(texto)}
        </p>
    );
}