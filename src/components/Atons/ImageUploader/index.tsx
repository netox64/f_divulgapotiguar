"use client";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export interface IImageUploaderProps {
    onUpload: (file: File) => Promise<string>;
    label?: string;
};

export const ImageUploader: React.FC<IImageUploaderProps> = ({ onUpload, label = 'Escolha uma imagem' }) => {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            const maxSize = 5 * 1024 * 1024; // Limite de 5MB, por exemplo
            if (selectedFile.size > maxSize) {
                toast.error('O arquivo é muito grande. O tamanho máximo permitido é 5MB.');
                return;
            }
            else if (!selectedFile.type.startsWith('image/')) {
                toast.error('Por favor, selecione um arquivo de imagem!');
                return;
            }
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
        }
    };

    const handleUpload = async () => {
        if (file) {
            try {
                const uploadedUrl = await onUpload(file);
                if (uploadedUrl) {
                    toast.success('Upload realizado com sucesso!');
                    const pathArray = uploadedUrl.split(/[/\\]/);
                    setPreview("/uploads/imoveis/" + pathArray[pathArray.length - 1]);
                }
            } catch (error) {
                toast.error(error + "erro no upload, tente novamente!")
            }
        }
    };

    useEffect(() => {
        if (file) {
            toast.success("imagem carregada!");
        }
    }, [file]);

    return (
        <div className="max-w-md mx-auto mt-10 flex flex-col items-center gap-3 p-3 border border-dashed border-gray-300 rounded-lg shadow-lg bg-gray-50 hover:bg-gray-100 transition" data-testid="file-input">
            {preview && (
                <div className="w-48 h-48 flex items-center justify-center overflow-hidden rounded-lg border border-gray-300">
                    <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                </div>
            )}
            {file && (
                <button onClick={handleUpload} className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition">
                    Fazer Upload
                </button>
            )}
            <div className="relative w-full">
                <input name="file" type="file" id="fileInput" accept="image/*" onChange={handleFileChange} className="hidden" />
                <label htmlFor="fileInput" className="flex flex-col items-center justify-center h-36 w-full cursor-pointer">
                    <svg className="w-12 h-12 mb-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p className="text-sm text-gray-500 font-semibold">{label}</p>
                    <p className="text-xs text-gray-400">SVG, PNG, JPG ou GIF (MAX. 800x400px)</p>
                </label>
            </div>
        </div>

    );
}
