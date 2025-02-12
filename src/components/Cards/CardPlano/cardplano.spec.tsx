import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { CardPlano } from ".";
import "@testing-library/jest-dom";

// Mock do useRouter
jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}));

describe("<CardPlano />", () => {
    const mockPush = jest.fn();

    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    });

    const defaultProps = {
        planoId: 1,
        nome: "Plano Premium",
        valor: 199,
        quantAnuncio: 10,
        duracao: 2,
        dataValidade: new Date(),
        dataAdquerido: new Date(),
    };

    test("should render the plan details correctly", () => {
        render(<CardPlano {...defaultProps} />);

        expect(screen.getByText("Plano Premium")).toBeInTheDocument();
        expect(screen.getByText("Até 10 anúncios.")).toBeInTheDocument();
        expect(screen.getByText("seus anúncios serão mantidos durante 2 ou mais anos.")).toBeInTheDocument();
    });

    test("should render the button when link is provided", () => {
        render(<CardPlano {...defaultProps} link="/comprar" textButton="Assinar" />);

        const button = screen.getByRole("button", { name: /assinar/i });
        expect(button).toBeInTheDocument();
    });

    test("should not render the button when link is not provided", () => {
        render(<CardPlano {...defaultProps} />);

        const button = screen.queryByRole("button");
        expect(button).not.toBeInTheDocument();
    });

    test("should call router.push when clicking the button", () => {
        render(<CardPlano {...defaultProps} link="/comprar" />);

        const button = screen.getByRole("button", { name: /adquerir/i });
        fireEvent.click(button);

        expect(mockPush).toHaveBeenCalledWith("/comprar");
    });
});
