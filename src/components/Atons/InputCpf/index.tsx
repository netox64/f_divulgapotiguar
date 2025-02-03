import React, { ChangeEvent } from "react";

export interface InputCpfProps {
    id: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const InputCpf: React.FC<InputCpfProps> = ({ id, value, onChange, placeholder }) => {
    // Função para formatar o CPF conforme o usuário digita
    const formatCpf = (value: string): string => {
        // Remove qualquer caractere não numérico
        const numericValue = value.replace(/\D/g, "");

        // Aplica a máscara do CPF (###.###.###-##)
        const formattedCpf = numericValue
            .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
            .slice(0, 14); // Garante que não ultrapasse o limite de 14 caracteres (incluindo os pontos e traço)

        return formattedCpf;
    };

    // Função chamada toda vez que o valor do input muda
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const formattedValue = formatCpf(event.target.value);
        onChange(formattedValue); // Atualiza o valor no componente pai
    };

    return (
        <input id={id} type="text" value={value} onChange={handleChange} placeholder={placeholder}
            style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", width: "100%" }}
        />
    );
};
