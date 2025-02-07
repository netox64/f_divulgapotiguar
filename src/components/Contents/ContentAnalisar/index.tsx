"use client";
import { PLimited } from "@/components/Atons";
import { CardBasic } from "@/components/Cards";
import { Imovel } from "@/components/Forms/types-models";
import { filterImovelStatusPendente } from "@/components/Utils/filters";
import { useGlobalStore } from "@/store";
import React, { useEffect, useState, useRef } from "react";
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import { toast } from "react-toastify";
GlobalWorkerOptions.workerSrc = "/pdfjs/build/pdf.worker.mjs";

export const ContentAnalisar = () => {
    const usuarioLogado = useGlobalStore(state => state.usuarioLogado);
    const imoveis = filterImovelStatusPendente(usuarioLogado.imoveis);
    const [selectedId, setSelectedId] = useState<number>();
    const [textDocs, setTextDocs] = useState<string>('');
    const [pdfUrl, setPdfUrl] = useState<string>('');
    const canvasRef = useRef<HTMLCanvasElement | null>(null);


    useEffect(() => {
        return () => { if (pdfUrl) { URL.revokeObjectURL(pdfUrl); } };
    }, [usuarioLogado, imoveis, pdfUrl]);

    const handleSelectImovel = (id: number) => {
        setSelectedId(id);
    };

    const renderPdf = async (url: string) => {
        const loadingTask = getDocument(url);
        const pdf = await loadingTask.promise;

        const page = await pdf.getPage(1); // Renderiza a primeira página do PDF
        const viewport = page.getViewport({ scale: 1.5 });

        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext("2d");
            if (context) {
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                await page.render({ canvasContext: context, viewport }).promise;
            }
        }
    };

    const extrairPdf = async (imovelId: number) => {
        const response = await fetch(`http://localhost:3000/api/imoveis/${imovelId}/txt`);
        const tarefaId = await response.json();
    
        if (response.ok) {
            toast.success("Processamento de dados iniciado, aguarde um pouco até o texto ser extraido e a análise ficar pronta.");
            let polling = true;
            const checkStatus = async () => {
                if (!polling) return;
                const statusResponse = await fetch(`http://localhost:3000/api/imoveis/${tarefaId}/processamento`);
                if (statusResponse.ok) {
                    const data = await statusResponse.json();
                    if (data.status === "CONCLUIDO") {
                        setTextDocs(data.resultado);
                        toast.success("Análise concluída!");
                        polling = false;
                    } else {
                        setTimeout(checkStatus, 2000);
                    }
                } else {
                    toast.error("Erro ao verificar o status do processamento.");
                    polling = false;
                }
            };
            checkStatus();
        }
    };    

    const buscarAnalisarDocumento = () => {
        const buscarPdf = async (imovelId: number) => {
            const pdfArquivo = await fetch(`http://localhost:3000/api/imoveis/${imovelId}/docs`);
            if (pdfArquivo.ok) {
                const blob = await pdfArquivo.blob();  // Obtém o arquivo como Blob
                const url = URL.createObjectURL(blob); // Cria uma URL temporária para o Blob
                                // Atualiza a URL do PDF no estado
                setPdfUrl(url); // Agora você pode usar a URL para mostrar o PDF
                renderPdf(url); // Renderiza o PDF no canvas
            } else {
                toast.error("Erro ao buscar o PDF");
            }
        };

        if (selectedId !== undefined) { buscarPdf(selectedId); }
    };

    const buscarOrientacao = () => {
        if (selectedId !== undefined) { extrairPdf(selectedId); }
    };

    return (
        <div className="w-full flex-col p-4">
            <div className="w-full flex gap-4 mt-5 flex-wrap">
                {imoveis && imoveis.length > 0 ? (
                    imoveis.map((imovel: Imovel) => (
                        <CardBasic key={imovel.imovelId} id={imovel.imovelId} title={imovel.nome} checked={selectedId === imovel.imovelId} fnCheck={handleSelectImovel}>
                            <PLimited texto={imovel.sobre} />
                        </CardBasic>
                    ))
                ) : (
                    <p className="w-full text-center text-gray-600">Não há imóveis para serem analisados no sistema.</p>
                )}
            </div>
            <button className="text-xl bg-emerald-500 p-4 rounded-2xl" onClick={buscarAnalisarDocumento}>Ver Documento</button>

            <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">O documento atrelado ao imóvel</h3>
                <div className="mt-2">
                    {pdfUrl ? (
                        <canvas ref={canvasRef} className="w-full h-auto border rounded-lg shadow-md" />
                    ) : (
                        <p className="text-center text-gray-500">Documento PDF não encontrado ou em processamento...</p>
                    )}
                </div>
            </div>
            <button className="text-xl bg-emerald-500 p-4 rounded-2xl" onClick={buscarOrientacao}>Buscar Analise de texto </button>
            <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">Os valores referentes ao imóvel que batem com a descrição cadastrada no sistema</h3>
                <div className="mt-2 p-4 bg-gray-50 border rounded-lg shadow-sm">
                    {textDocs ? (
                        <div dangerouslySetInnerHTML={{ __html: textDocs }} />) : (
                        <p className="text-center text-gray-500">Texto do imóvel não encontrado ou em processamento...</p>
                    )}
                </div>
            </div>
        </div>
    );
};
