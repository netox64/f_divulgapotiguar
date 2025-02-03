"use client";

import React, { useState } from "react";

export interface ISearchBarProps { onSearch: (query: string) => void; };

export const SearchBar: React.FC<ISearchBarProps> = ({ onSearch }) => {
    const [valorDigitado, setValorDigitado] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValorDigitado(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onSearch(valorDigitado);
        }
    };

    return (
        <div className="w-full flex items-center justify-start px-2 bg-[#1f99dd] h-[50px] rounded-3xl">
            <input className="h-[35px] p-2 text-base w-[300px] border border-gray-300  rounded-3xl"
                type="text" value={valorDigitado} onChange={handleChange} onKeyDown={handleKeyDown} placeholder="Search..." />
        </div>
    );
}