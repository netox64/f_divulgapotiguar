"use client";
import { Avalicacao } from "@/components/Forms/types-models";
import React, { useState, useEffect } from "react";

type ChartData = { quantVerificacao: number; quantAcerto: number; indiceConfiabilidade: number; };
type Props = { data: Avalicacao; };

export const GraphLines: React.FC<Props> = ({ data }) => {
    const [chartData, setChartData] = useState<ChartData[]>([]);

    useEffect(() => {
        if (data && !isNaN(data.quantVerificacao) && !isNaN(data.quantAcerto) && !isNaN(data.indiceConfiabilidade)) {
            setChartData((prevData) => [
                ...prevData.slice(-9), // Mantém apenas os últimos 9 registros
                data,
            ]);
        }
    }, [data]);

    // Dimensões do gráfico
    const width = 400;
    const height = 200;
    const padding = 40;

    // Ajuste de máximos de acordo com os intervalos desejados
    const maxVerificacao = 100; // Quantidade de verificações vai de 1 a 100
    const maxAcerto = 100; // Quantidade de acertos vai de 0 a 100
    const maxConfiabilidade = 100; // Confiabilidade vai de 0% a 100%

    // Função para converter valores para coordenadas no gráfico
    const scaleX = (index: number) => padding + (chartData.length > 1 ? (index / (chartData.length - 1)) * (width - 2 * padding) : 0);
    const scaleY = (value: number, max: number) => height - padding - (value / max) * (height - 2 * padding);

    // Gerar os pontos para as linhas
    const getLinePath = (dataKey: keyof ChartData, max: number, color: string) => {
        return chartData.map((point, index) => {
            const x = scaleX(index);
            const y = scaleY(point[dataKey], max);
            return `${x},${y}`;
        }).join(" ");
    };

    return (
        <div style={{ width: "50%", height: "250px", background: "#1f1f1f", padding: 20, borderRadius: 10 }}>
            <h3 style={{ color: "#fff", textAlign: "center", marginBottom: 10 }}>Métricas de Verificação</h3>
            <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
                {/* Linhas */}
                <polyline fill="none" stroke="#ff7" strokeWidth="2" points={getLinePath("quantVerificacao", maxVerificacao, "#ff7")} />
                <polyline fill="none" stroke="#ff5c00" strokeWidth="2" points={getLinePath("quantAcerto", maxAcerto, "#ff5c00")} />
                <polyline fill="none" stroke="#00c6ff" strokeWidth="2" points={getLinePath("indiceConfiabilidade", maxConfiabilidade, "#00c6ff")} />
                {/* Eixos */}
                <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#aaa" strokeWidth="1" />
                <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#aaa" strokeWidth="1" />

                {/* Pontos e Labels */}
                {chartData.map((point, index) => {
                    const x = scaleX(index);
                    return (
                        <React.Fragment key={index}>
                            {/* Pontos */}
                            <circle cx={x} cy={scaleY(point.quantVerificacao, maxVerificacao)} r="4" fill="#ff7" />
                            <circle cx={x} cy={scaleY(point.quantAcerto, maxAcerto)} r="4" fill="#ff5c00" />
                            <circle cx={x} cy={scaleY(point.indiceConfiabilidade, maxConfiabilidade)} r="4" fill="#00c6ff" />
                            {/* Labels */}
                            <text x={x + 5} y={scaleY(point.quantVerificacao, maxVerificacao) - 10} fill="#ff7" fontSize="10" fontFamily="Arial">{point.quantVerificacao}</text>
                            <text x={x + 5} y={scaleY(point.quantAcerto, maxAcerto) - 10} fill="#ff5c00" fontSize="10" fontFamily="Arial">{point.quantAcerto}</text>
                            <text x={x + 5} y={scaleY(point.indiceConfiabilidade, maxConfiabilidade) - 10} fill="#00c6ff" fontSize="10" fontFamily="Arial">{point.indiceConfiabilidade.toFixed(2)}%</text>
                        </React.Fragment>
                    );
                })}
            </svg>
        </div>
    );
};
