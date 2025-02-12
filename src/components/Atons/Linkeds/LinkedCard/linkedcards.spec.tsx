import { render, screen } from "@testing-library/react";
import { LinkedCard } from ".";

describe("<LinkedCard />", () => {
    test("The LinkedCard should be rendered on the screen with the expected text", () => {
        render(<LinkedCard texto="Expected Text" destino="/example" />);

        const element = screen.getByText("Expected Text");

        expect(element).toBeInTheDocument();
    });

    test("Should contain the correct CSS class", () => {
        render(<LinkedCard texto="Expected Text" destino="/example" />);

        const linkElement = screen.getByRole("link");

        expect(linkElement).toHaveClass("w-full h-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-around rounded-lg");
    });

    test("Should navigate to the correct destination when clicked", async () => {
        render(<LinkedCard texto="Click Me" destino="/target-page" />);

        const linkElement = screen.getByRole("link", { name: "Click Me" });

        expect(linkElement).toHaveAttribute("href", "/target-page");
    });
});
