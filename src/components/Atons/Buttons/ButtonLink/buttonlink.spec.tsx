import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ButtonLink } from ".";

describe("<ButtonLink />", () => {

    test("check if the component is actually being rendered on the screen", () => {
        render(
            <ButtonLink label="Save" colorOne="red" colorTwo="red" url="/example" />
        );

        const link = screen.getByRole("heading", { name: /save/i });
        expect(link).toBeInTheDocument();
    });

    test("should have the correct classes based on props", () => {
        render(
            <ButtonLink label="Click Me" colorOne="blue" colorTwo="green" url="/test" />
        );

        const button = screen.getByRole("button");
        expect(button).toHaveClass("bg-gradient-to-r from-blue-500 to-green-700 text-white");
    });

    test("should trigger fnClick when clicked if not disabled", async () => {
        const mockFn = jest.fn();
        render(
            <ButtonLink label="Click Me" colorOne="blue" colorTwo="green" url="/test" fnClick={mockFn} />
        );

        const button = screen.getByRole("button");
        await userEvent.click(button);
        expect(mockFn).toHaveBeenCalledWith("/test");
    });

    test("should not trigger fnClick when disabled", async () => {
        const mockFn = jest.fn();
        render(
            <ButtonLink label="Click Me" colorOne="blue" colorTwo="green" url="/test" fnClick={mockFn} disabled />
        );

        const button = screen.getByRole("button");
        await userEvent.click(button);
        expect(mockFn).not.toHaveBeenCalled();
    });
});
