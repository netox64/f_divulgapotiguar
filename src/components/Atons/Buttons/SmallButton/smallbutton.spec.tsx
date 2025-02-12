import { render, screen, fireEvent } from "@testing-library/react";
import { SmallButton } from "./";

describe("SmallButton Component", () => {
    
    test("renders the button with the correct label", () => {
        render(<SmallButton label="Click Me" active={true} />);
        expect(screen.getByRole("button", { name: "Click Me" })).toBeInTheDocument();
    });

    test("calls fnClick when clicked if active", () => {
        const handleClick = jest.fn();
        render(<SmallButton label="Click Me" active={true} fnClick={handleClick} />);
        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("does not call fnClick when disabled", () => {
        const handleClick = jest.fn();
        render(<SmallButton label="Click Me" active={false} fnClick={handleClick} />);
        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(handleClick).not.toHaveBeenCalled();
    });

    test("button has disabled attribute when not active", () => {
        render(<SmallButton label="Disabled" active={false} />);
        expect(screen.getByRole("button")).toBeDisabled();
    });

    test("button does not have disabled attribute when active", () => {
        render(<SmallButton label="Enabled" active={true} />);
        expect(screen.getByRole("button")).not.toBeDisabled();
    });
});
