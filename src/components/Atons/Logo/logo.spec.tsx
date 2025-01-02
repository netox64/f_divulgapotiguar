import { render, screen } from "@testing-library/react";
import { Logo } from ".";

describe("<Logo />", () => {
  test("check if the component is rendered", () => {
    render(<Logo />);
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });

  test("check if there is an image right in the component", () => {
    render(<Logo />);
    const imagem = screen.getByRole("img", { name: "logo do site" }); //testando o alt
    expect(imagem).toBeInTheDocument();
  });
});
