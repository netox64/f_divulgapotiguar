import { render, screen } from "@testing-library/react";
import { AvatarUpdateField } from ".";

describe("<AvatarUpdateField />", () => {
    // Given global
    beforeEach(() => {
        render(<AvatarUpdateField textlabel={"Label"} textfield={"texto#1"} />);
    });

    test("O AvatarUpdateFieldshould be rendered on screen with the expected text", async () => {
        // When 
        const elemento = await screen.findByTestId("avatar-update-field");
        const divlabel = screen.getByText("Label:");
        const divtext = screen.getByText("texto#1");
        //Then
        expect(elemento).toBeInTheDocument();
        expect(divlabel).toBeInTheDocument();
        expect(divtext).toBeInTheDocument();
    });

    test("must contain the correct classes", async () => {
        // When 
        const elemento = await screen.findByTestId("avatar-update-field");
        //Then
        expect(elemento).toHaveClass("flex");
        expect(elemento).toHaveClass("items-center");
        expect(elemento).toHaveClass("justify-between");
    });
});