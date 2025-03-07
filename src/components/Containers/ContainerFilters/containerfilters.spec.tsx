import { render, screen } from "@testing-library/react";
import { ContainerRows } from "./index";

describe("<ContainerRows />", () => {

    // Given Globals
    beforeEach(() => {
        render(<ContainerRows> <div>Child 1</div> <div>Child 2</div></ContainerRows>);
    });

    test("renders correctly", () => {
        // When
        const container = screen.getByTestId("container-rows");

        // Then
        expect(container).toBeInTheDocument();
    });

    test("renders children correctly", () => {
        // When
        const child1 = screen.getByText("Child 1");
        const child2 = screen.getByText("Child 2");

        // Then
        expect(child1).toBeInTheDocument();
        expect(child2).toBeInTheDocument();
    });

    test("has correct classes and attributes", () => {
        // When
        const container = screen.getByTestId("container-rows");

        // Then
        expect(container).toHaveClass("w-full");
        expect(container).toHaveClass("h-auto");
        expect(container).toHaveClass("flex");
        expect(container).toHaveClass("flex-wrap");
        expect(container).toHaveClass("justify-center");
    });
});