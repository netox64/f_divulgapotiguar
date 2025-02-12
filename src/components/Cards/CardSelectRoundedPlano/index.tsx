"use client";

import { IPLimitedProps } from "@/components/Atons/Texts/PLimited";
import { Component, ReactNode } from "react";

export interface ICardSelected {
    id: number;
    title: string;
    checked?: boolean;
    fnCheck?: (id: number) => void;
    children: React.ReactElement<IPLimitedProps>;
}

export class CardSelectRoundedPlano extends Component<ICardSelected> {

    render(): ReactNode {
        const { checked, title, children, fnCheck, id } = this.props;

        return (
            <div onClick={() => {
                fnCheck && fnCheck(id);

            }} className={`w-32 aspect-square flex flex-col items-center justify-center p-3 bg-white border-8 rounded-full shadow cursor-pointer transition-all ${checked ? "border-4 border-blue-600" : "border-gray-200"}`}>
                <div className="p-3 text-center">
                    <h5 className="mb-1 text-xl font-semibold tracking-tight text-gray-800">
                        {title}
                    </h5>
                    <div className="mb-2">{children}</div>
                </div>
            </div>

        );

    }
}
