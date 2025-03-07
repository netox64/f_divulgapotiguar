"use client";

import React from "react";
import { Categoria } from "@/components/Forms/types-models";

export interface CategoriaSelectorProps {
    categorias: Categoria[];
    selectedCategorias: number[];
    onCategoriaChange: (selectedIds: number[]) => void;
}

export const CategoriaSelector: React.FC<CategoriaSelectorProps> = ({ categorias, selectedCategorias, onCategoriaChange}) => {

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = Array.from(event.target.selectedOptions).map((option) =>
            parseInt(option.value, 10)
        );
        onCategoriaChange(selectedOptions);
    };

    return (
        <div className="w-full flex items-center justify-center flex-col gap-6 mt-6">
            {categorias && categorias.length > 0 ? (
                <div className="w-full max-w-lg">
                    <div className="text-center mb-4">
                        <p className="text-base font-semibold text-gray-700">
                            <strong>Categorias selecionadas:</strong>{" "}
                            <em className="text-blue-400">
                                {selectedCategorias.length > 0 ? selectedCategorias.map((id) => categorias.find((categoria) => categoria.categoriaId === id)?.nome || id).join(", ") : "Nenhuma"}
                            </em>
                        </p>
                    </div>
                    <div>
                        <label htmlFor="categorias" className="block text-sm font-medium text-gray-700 mb-2">
                            Selecione as categorias, dica : use Ctrl + Click para selecionar mais de uma:
                        </label>
                        <select id="categorias" multiple
                            className="block w-full bg-white text-sm border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                            onChange={handleSelectChange}
                            value={selectedCategorias.map(String)}
                        >
                            {categorias.map((categoria) => (
                                <option key={categoria.categoriaId} value={categoria.categoriaId} className={`px-2 py-1 ${selectedCategorias.includes(categoria.categoriaId) ? "bg-green-200 text-green-800" : "bg-white text-gray-800"}`}>
                                    {categoria.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            ) : (
                <div className="text-center text-red-600">
                    <p>Não existe nenhuma categoria cadastrada no sistema.</p>
                </div>
            )}
        </div>
    );
};
