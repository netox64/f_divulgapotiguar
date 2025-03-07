"use client";

import { ButtonLink } from "@/components/Atons/Buttons";
import { useRouter } from "next/navigation";
import React from "react";

export interface IContainerProps { adjetivo: "novo" | "nova"; recurso: string; createUrl?: string; updateUrl?: string; deleteUrl?: string; };

export const Container: React.FC<IContainerProps> = ({ createUrl, updateUrl, deleteUrl, adjetivo, recurso }) => {
    const router = useRouter();

    const handleclick = (url: string) => {
        router.push(url);
    };

    return (
        <div className="w-full flex items-center justify-start gap-5 flex-wrap" data-testid="container-options-manager">
            {createUrl && (
                <ButtonLink label={`criar ${adjetivo} ${recurso}`} url={createUrl} colorOne={"green"} colorTwo={"blue"} fnClick={handleclick} transparent />
            )}
            {updateUrl && (
                <ButtonLink label={`atualizar ${recurso}`} url={updateUrl} colorOne={"yellow"} colorTwo={"blue"} fnClick={handleclick} transparent />
            )}
            {deleteUrl && (
                <ButtonLink label={`deletar ${recurso}`} url={deleteUrl} colorOne={"red"} colorTwo={"blue"} fnClick={handleclick} transparent />
            )}
        </div>
    );
};
