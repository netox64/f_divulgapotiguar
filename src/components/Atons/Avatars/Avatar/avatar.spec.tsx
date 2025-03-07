import { render, screen } from "@testing-library/react";
import { Avatar } from ".";

describe("<Avatar />", () => {

    //Given globals
    beforeEach(() => {
        render(<Avatar />);
    });

    test("The Avatar should render on screen with the expected text", async () => {
        // When
        const elemento = await screen.findByTestId("container-avatar");

        // Then
        expect(elemento).toBeInTheDocument();
    });

    test("inside the container there must be an image component", async () => {
        // When
        const elemento = await screen.findByTestId("img-avatar");

        // Then
        expect(elemento).toBeInTheDocument();
    });
});