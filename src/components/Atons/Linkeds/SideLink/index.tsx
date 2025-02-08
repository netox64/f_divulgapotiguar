import React from "react";
import Link from "next/link";
import Canivete from "@/components/Utils/canivete";

export interface ISideLinkProps { destination: string; };

export const SideLink: React.FC<ISideLinkProps> = ({ destination }) => {

    return (
        <div className="w-full h-3 flex items-center justify-center p-3 text-base text-white font-bold hover:bg-green-500 transform hover:scale-110">
            <Link href={`/${destination}`}>{Canivete.captalizeFirstLetter(destination)}</Link>
        </div>
    );
}