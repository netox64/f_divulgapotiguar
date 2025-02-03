"use client";

import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

interface InputProps { name: string; label: string; type?: string; required?: boolean; ishidden?: boolean; pattern?: RegExp; placeholder?: string; }

export const InputCustom: React.FC<InputProps> = ({ name, label, type = 'text', required, pattern, placeholder, ishidden }) => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <div className="flex flex-col space-y-2">
            {!ishidden && (
                <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                    {label}:
                </label>
            )}
            <Controller control={control} name={name} rules={{
                required: !ishidden && required ? 'Campo obrigatório' : false,
                pattern: pattern ? { value: pattern, message: 'Formato inválido' } : undefined,
            }}
                render={({ field }) => (
                    <input className={`w-full px-3 py-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring ${errors[name]
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:border-blue-300'
                        }`}{...field} id={name} type={type} placeholder={ishidden ? '' : placeholder} hidden={ishidden}
                        aria-hidden={ishidden} />
                )}
            />
            {errors[name]?.message && (
                <p className="text-sm text-red-500">{errors[name]?.message as string}</p>
            )}
        </div>
    );
};
