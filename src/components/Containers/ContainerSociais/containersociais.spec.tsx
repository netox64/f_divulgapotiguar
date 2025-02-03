import { render, screen } from "@testing-library/react";
import { ContainerRedesSociais } from ".";

describe("<ContainerRedesSociais />", () => {

  test("The ContainerRedesSociais component must be rendered on the screen with children", () => {
    
    render(<ContainerRedesSociais>Test Child</ContainerRedesSociais>);

    const elemento = screen.getByText("Test Child");

    expect(elemento).toBeInTheDocument();

  });

});