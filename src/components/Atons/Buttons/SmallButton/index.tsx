"use client";
import Canivete from "@/components/Utils/canivete";
import React from "react";

export interface ISmallButtonProps {
    label: string;
    active: boolean;
    type?: "submit" | "reset" | "button" | undefined;
    fnClick?: () => void;
};

export const SmallButton: React.FC<ISmallButtonProps> = ({ label, fnClick, active, type }) => {
    const clsAtivada = active
        ? "px-4 py-2 md:px-6 md:py-3 text-xs lg:text-base text-teal-600 bg-teal-50 hover:bg-teal-100 rounded-full shadow-lg font-medium"
        : "px-4 py-2 md:px-6 md:py-3 text-xs lg:text-base text-white bg-gray-300 rounded-full shadow-lg font-medium cursor-not-allowed";

    return (
        <button className={clsAtivada} onClick={fnClick} disabled={!active} type={type || undefined}>
            {Canivete.captalizeFirstLetter(label)}
        </button>
    );
};
