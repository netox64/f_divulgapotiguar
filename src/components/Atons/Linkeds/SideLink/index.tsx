import React from "react";
import Link from "next/link";
import Canivete from "@/components/Utils/canivete";
import { LockClosedIcon } from "@heroicons/react/24/outline";

export interface ISideLinkProps { destination: string; isRouteAdmin: boolean; };

export const SideLink: React.FC<ISideLinkProps> = ({ destination,isRouteAdmin }) => {
    return (
        <div className="w-full h-3 flex items-center justify-center gap-2 p-3 text-base text-white font-bold hover:bg-green-500 transform hover:scale-110">
            <Link href={`/${destination}`}>
                {Canivete.captalizeFirstLetter(destination)}
            </Link>
            {isRouteAdmin && <LockClosedIcon className="w-4 h-4 text-amber-400 stroke-amber-400 stroke-2" style={{ strokeWidth: 4 }} />}
        </div>
    );
};
