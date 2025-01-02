import { render, screen } from "@testing-library/react";
import { Header } from ".";
import styles from "./header.module.css";
import { Logo } from "../Atons/Logo";
import { NavBar } from "../Navbar";

describe("< Header/>", () => {
  test("checked if the header was rendered on the screen", () => {
    render(
      <Header bg={"white"}>
        <Logo />
        <NavBar />
      </Header>
    );
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  test("apply 'white' class when bg is 'white'", () => {
    const { container } = render(
      <Header bg="white">
        <div>Conteúdo do Header</div>
      </Header>
    );

    // Verifica se a classe "white" foi aplicada corretamente
    expect(container.firstChild).toHaveClass(styles.white);
  });

  test("apply 'dark' class when bg is 'dark'", () => {
    const { container } = render(
      <Header bg="dark">
        <div>Conteúdo do Header</div>
      </Header>
    );

    // Verifica se a classe "dark" foi aplicada corretamente
    expect(container.firstChild).toHaveClass(styles.dark);
  });

  test("applies the correct layout classes", () => {
    const { container } = render(
      <Header bg="white">
        <div>Conteúdo do Header</div>
      </Header>
    );

    // Verifica se as classes de layout foram aplicadas
    expect(container.firstChild).toHaveClass("grid");
    expect(container.firstChild).toHaveClass("grid-cols-1");
  });

  test("checked if placed the 2 elements inside they are rendered", () => {
    render(
      <Header bg={"white"}>
        <Logo />
        <NavBar />
      </Header>
    );
    const logo = screen.getByTestId("logo");
    const navbar = screen.getByRole("navigation");

    expect(logo).toBeInTheDocument();
    expect(navbar).toBeInTheDocument();
  });

  test("renders correctly without children", () => {
    const { container } = render(<Header bg="dark" />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
