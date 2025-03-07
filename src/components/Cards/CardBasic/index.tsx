"use client";

import { IPLimitedProps } from "@/components/Atons/Texts/PLimited";
import Image from "next/image";
import Link from "next/link";
import { Component, ReactNode } from "react";

export interface ICardBasic {
    id: number;
    title: string;
    image?: string;
    guidance?: "Horizontal" | "Vertical";
    checked?: boolean;
    fnCheck?: (id: number) => void;
    children: React.ReactElement<IPLimitedProps>;
}

export class CardBasic extends Component<ICardBasic> {

    render(): ReactNode {
        const { checked, title, image, guidance, children, fnCheck, id } = this.props;

        if (guidance && guidance === "Horizontal") {
            return (
                <div className="max-w-full h-[200px] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 transition-colors">
                    <div className="w-full h-[200px] overflow-hidden">
                        <Image className="w-full h-0 md:h-full object-cover rounded-t-lg md:rounded-none md:rounded-s-lg" src={image ? `/uploads/imoveis/${image}` : "/imgs/resort-town.jpg"} alt={`Imagem demonstrativa do imóvel ${title}`} width={100} height={200} />
                    </div>
                    <div className="flex flex-col justify-center items-start leading-normal w-full pl-2">
                        <h5 className="mb-2 text-lg p-1 font-bold tracking-tight text-gray-900">
                            {title}
                        </h5>
                        {children}
                        <div className="w-full flex items-center justify-between px-2">
                            <Link href={`/imoveis/${id}`} className="inline-flex items-center px-2 py-1 my-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Ver Mais
                                <svg className="rtl:rotate-180 w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>
                        {/*TODO: starts */}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="max-w-72 bg-white border border-gray-200 rounded-lg shadow">
                    <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
                        <Image className="rounded-t-lg" src={image ? `/uploads/imoveis/${image}` : "/imgs/resort-town.jpg"} alt={`imagem demonstrativa do imóvel ${title}`} fill style={{ objectFit: "cover" }} />
                    </div>
                    <div className="p-5">
                        <h5 className="mb-1 text-xl font-semibold tracking-tight text-gray-800">
                            {title}
                        </h5>
                        <div className="mb-2">
                            {children}
                        </div>
                        <div className="w-full flex items-center gap-3 justify-between">
                            <Link href={`/imoveis/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Ver Mais
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                            <div onClick={() => fnCheck && fnCheck(id)} className="flex items-center cursor-pointer gap-2 select-none">
                                <span className={`w-5 h-5 flex items-center justify-center rounded-full border-2 transition-colors ${checked ? "border-blue-500 bg-blue-500" : "border-gray-500 bg-gray-200"}`}>
                                    {checked && <span className="w-2.5 h-2.5 bg-white rounded-full"></span>}
                                </span>
                                <span className={`text-sm font-medium transition-colors ${checked ? "text-blue-600" : "text-gray-800"}`}>
                                    {checked ? "Selecionado" : "Selecionar"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
