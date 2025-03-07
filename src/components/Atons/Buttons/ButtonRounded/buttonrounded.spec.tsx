import { fireEvent, render, screen } from "@testing-library/react";
import { ButtonRounded } from ".";

describe("<ButtonRounded />", () => {

    render(<ButtonRounded label={"save"} color={"red"} />);
    const button = screen.getByRole("button", { name: /save/i });

    test("check if the component is actually being rendered on the screen.", () => {
        expect(button).toBeInTheDocument();
    });

    test("selected if the button has the rounded attributes", () => {
        expect(button).toHaveAttribute("class", expect.stringMatching(/buttonrounded/i));
    });

    test("selected if the button is enabled by default", () => {
        expect(button).not.toBeDisabled();
    });

    test("stested if when disabled the button has the disabled style", () => {
        // Given
        render(
            <ButtonRounded label={"save"} color={"red"} disabled={true} />
        );
        // When
        const buttondisabled = screen.getByRole("button", { name: /save/i });

        // Then
        expect(buttondisabled).toHaveAttribute("class", expect.stringMatching(/disable/i));
    });

    test("checks if fnClick function is called when clicking the button", () => {
        const handleClick = jest.fn();
        render(<ButtonRounded label="Save" color="red" fnClick={handleClick} />);
        const button = screen.getByRole("button", { name: /save/i });

        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("checks if fnClick function is not called when button is disabled", () => {
        const handleClick = jest.fn();
        render(<ButtonRounded label="Save" color="red" disabled fnClick={handleClick} />);
        const button = screen.getByRole("button", { name: /save/i });

        fireEvent.click(button);

        expect(handleClick).not.toHaveBeenCalled();
    });

});
