import React from "react";
import Link from "next/link";
import { DocumentIcon } from "@heroicons/react/24/outline";

export interface ILinkedCardProps { texto: string; destino: string; };

export const LinkedCard: React.FC<ILinkedCardProps> = ({ texto, destino }) => {
    return (
        <Link href={destino} className="w-full h-full bg-gradient-to-r   from-blue-500 to-green-500 flex items-center justify-around rounded-lg">
            <p className="text-xl font-bold text-gray-50">{texto}</p>
            <DocumentIcon className="h-6 w-6 text-gray-50" />
        </Link>
    );
}