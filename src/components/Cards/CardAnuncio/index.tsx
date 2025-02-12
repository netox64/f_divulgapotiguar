"use client";

import Image from "next/image";
import Canivete from "@/components/Utils/canivete";
import { redirect } from "next/navigation";
import { ButtonLink } from "@/components/Atons/Buttons";

export interface ICardAnuncioProps { title: string; img?: string; body: string; url: string; };

export const CardAnuncio = ({ title, img, body, url }: ICardAnuncioProps) => {
    const handleClick = (url: string) => {
        redirect(url)
    }
    return (
        <div className="w-full max-w-[300px] min-h-[200px] bg-slate-200 rounded-2xl flex flex-col items-center p-4 shadow-lg" data-testid="card-anuncio">
            <h3 className="w-full font-light text-center text-custom-blue text-lg m-1 truncate">{title}</h3>

            <div className="w-full flex items-center justify-center">
                <Image className="max-w-full h-auto" src={img ? `/imgs/${img}` : `/imgs/imgs_default.svg`} width={120} height={90} alt={`imagem referente ao item anunciado ${title}`} priority />
            </div>

            <div className="w-full max-w-[180px] flex-1 overflow-hidden">
                <p className="text-slate-800 text-sm text-wrap break-words whitespace-normal">{Canivete.captalizeLimitText(body)}</p>
            </div>

            <ButtonLink label={"Ver"} colorOne={"green"} colorTwo={"green"} url={url} fnClick={handleClick}
            />
        </div>
    );
}