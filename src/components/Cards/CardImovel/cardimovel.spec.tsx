import React from "react";
import { render, screen } from "@testing-library/react";
import { Imovel } from "@/components/Forms/types-models";
import { CardImovel } from ".";

// Mock do Imovel
const mockImovel: Imovel = {
    imovelId: 1, nome: "Casa de Praia", localizacao: "Praia do Forte, Bahia", sobre: "Uma linda casa de praia com vista para o mar.", tipo: "Casa",
    areaCalculada: 150, comprimento: 10, largura: 15, status: "PENDENTE", imagemImovel: "casa-praia.jpg",
    usuario: "", isAnunciado: false
};

describe("CardImovel", () => {
    test("must render the name of the property", () => {
        render(<CardImovel imovel={mockImovel} />);

        const nomeImovel = screen.getByRole('heading', { name: /Casa de Praia/i });
        
        expect(nomeImovel).toBeInTheDocument();
    });

    test("must render the location of the property", () => {
        render(<CardImovel imovel={mockImovel} />);

        const localizacao = screen.getByText(/Praia do Forte, Bahia/i);
        expect(localizacao).toBeInTheDocument();
    });

    test("must render the calculated area of ​​the property", () => {
        render(<CardImovel imovel={mockImovel} />);

        const area = screen.getByText(/Área: 150m²/i);
        expect(area).toBeInTheDocument();
    });

    test("must render the image of the property", () => {
        render(<CardImovel imovel={mockImovel} />);

        const imagem = screen.getByAltText(/Casa de Praia/i);
        const imagemSrc = imagem.getAttribute('src');

        expect(imagemSrc).toContain('casa-praia.jpg');
    });

    test("should render the extra content when provided", () => {
        const extraContent = <div data-testid="container-options-manager">Conteúdo extra</div>;

        render(<CardImovel imovel={mockImovel} extraContent={extraContent} />);

        const extra = screen.getByTestId("container-options-manager");
        expect(extra).toBeInTheDocument();
    });

    test("should not render extra content when not provided", async () => {
        render(<CardImovel imovel={mockImovel} />);

        const extra = screen.queryByTestId("container-options-manager");
        expect(extra).toBeNull();
    });
});
