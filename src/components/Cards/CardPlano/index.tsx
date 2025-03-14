"use client";

import { useRouter } from "next/navigation";
import React from "react";

export interface ICardPlanoProps {
    planoId: number; nome: string; valor: number; quantAnuncio: number; duracao: number; dataValidade: Date; dataAdquerido: Date; link?: string; textButton?: string
};

export const CardPlano: React.FC<ICardPlanoProps> = ({ planoId, nome, valor, quantAnuncio, duracao, dataValidade, dataAdquerido, link, textButton }) => {
    const router = useRouter();

    const handleClick = () => { if (link) { router.push(link); } }
    return (
        <div className="flex flex-col rounded-lg bg-slate-200 shadow-sm max-w-80 p-8 my-6 border border-slate-200 hover:bg-custom-blue">
            <div className="pb-8 m-0 mb-8 text-center text-slate-800 border-b border-slate-200">
                <p className="text-sm uppercase font-semibold text-slate-500">
                    {nome}
                </p>
                <h1 className="flex justify-center gap-1 mt-4 font-bold text-slate-800 text-6xl">
                    <span className="text-3xl">R$</span>{valor}
                    <span className="self-end font-light text-sm"> {duracao > 1 ? (`/ válido durante ${duracao} anos`) : (`/ válido durante ${duracao} ano`)}</span>
                </h1>
            </div>
            <div className="p-0">
                <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-4">
                        <span className="p-1 border rounded-full border-slate-200 bg-slate-50">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-slate-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                        </span>
                        <p className="text-slate-500 hover:text-black">
                            Até {quantAnuncio} anúncios.
                        </p>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="p-1 border rounded-full border-slate-200 bg-slate-50">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-slate-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                        </span>
                        <p className="text-slate-500 hover:text-black">
                            +3 plataformas onde serão divulgados.
                        </p>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="p-1 border rounded-full border-slate-200 bg-slate-50">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-slate-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                        </span>
                        <p className="text-slate-500 hover:text-black">
                            segurança.
                        </p>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="p-1 border rounded-full border-slate-200 bg-slate-50">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-slate-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                        </span>
                        <p className="text-slate-500 hover:text-black">
                            seus anúncios serão mantidos durante {duracao} ou mais anos.
                        </p>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="p-1 border rounded-full border-slate-200 bg-slate-50">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-slate-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                        </span>
                        <p className="text-slate-500 hover:text-black">
                            Paque pelo pacote, e receba feeds sobre seus anúncios.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="p-0 mt-12">
                {
                    link ? (
                        <button className="min-w-32 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white 
                        transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700
                  hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={handleClick}>
                            {textButton ? textButton : "Adquerir"}
                        </button>
                    ) : (null)
                }
            </div>
        </div>
    );
}