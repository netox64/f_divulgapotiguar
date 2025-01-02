import { render, screen } from "@testing-library/react";
import { NavItem } from ".";

describe("<NavItem />", () => {
  test("verifica se o componente é renderizado", () => {
    render(<NavItem routeName={""} />);

    const elemento = screen.getByTestId("nav-link");
    expect(elemento).toBeInTheDocument();
  });
});
