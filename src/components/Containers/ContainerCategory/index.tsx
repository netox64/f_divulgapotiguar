"use client";

import { Categoria } from "@/components/Forms/types-models";
import React, { useState } from "react";

export interface IContainerCategoryProps { data: Categoria[] };
export interface ICategoria { id: number; name: string; description: string; };

export const ContainerCategory: React.FC<IContainerCategoryProps> = ({ data }) => {
    const [expandedCategoryId, setExpandedCategoryId] = useState<number | null>(null);

    const toggleDescription = (id: number) => {
        setExpandedCategoryId(expandedCategoryId === id ? null : id);
    };

    return (
        <div className="w-full p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Categorias</h2>
            <div className="flex space-x-4 space-y-4 flex-wrap">
                {data.map((category: Categoria) => (
                    <div key={category.categoriaId} className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
                        <button onClick={() => toggleDescription(category.categoriaId)} className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                            {category.nome}
                        </button>
                        {expandedCategoryId === category.categoriaId && (
                            <p className="mt-2 text-gray-600">{category.descricao}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}