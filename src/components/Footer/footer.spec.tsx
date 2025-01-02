import { render, screen } from "@testing-library/react";
import { Footer } from ".";

describe("<Footer />", () => {
  test("The footer component must be rendered on the screen", async () => {
    render(<Footer />);
    const elemento = await screen.findByTestId("footer");
    expect(elemento).toBeInTheDocument();
  });
});
