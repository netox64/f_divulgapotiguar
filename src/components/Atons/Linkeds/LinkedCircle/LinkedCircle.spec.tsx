import { render, screen } from "@testing-library/react";
import { LinkedCircle } from ".";

describe("<LinkedCircle />", () => {

    test("The component should render correctly on the screen", () => {
        // given
        render(<LinkedCircle endereco={"/"} />);

        //when
        const elemento = screen.getByTestId("linked-circle");
        //then
        expect(elemento).toBeInTheDocument();
    });

    test("Must contain the correct CSS class", () => {
        // given
        render(<LinkedCircle endereco={"/"} />);

        //when
        const elemento = screen.getByTestId("linked-circle");
        //then
        expect(elemento).toHaveClass("bg-gray-300 p-2 mx-5 rounded-full");
    });

    test("Must have the href passed as props", () => {
        // given
        render(<LinkedCircle endereco={"/"} />);

        //when
        const elemento = screen.getByTestId("linked-circle");
        //then
        expect(elemento).toHaveAttribute("href", "/");
    });

    test("Should render default image when 'imagem' prop is not provided", async () => {
        // given
        render(<LinkedCircle endereco={"/"} />);

        //when
        const imagemElement = await screen.getByTestId("img-link-circle");
        //then
        expect(imagemElement).toHaveAttribute("src", "/imgs/imgs_default.svg");
    });

    test("should render the image that is passed by pros", async () => {
        //given
        render(<LinkedCircle endereco={"/"} imagem={"maquinha.svg"} />);
        
        //when
        const imagemElement = await screen.getByTestId("img-link-circle");
        //then
        expect(imagemElement).toHaveAttribute("src", "/imgs/maquinha.svg");
    });

});
