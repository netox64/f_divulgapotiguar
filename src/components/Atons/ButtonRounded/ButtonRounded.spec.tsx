import { render, screen } from "@testing-library/react";
import { ButtonRounded } from ".";

describe("<ButtonRounded />", () => {
  
  render(<ButtonRounded label={"save"} action={"click"} color={"red"} />);
  const button = screen.getByRole("button", { name: /save/i });

  test("check if the component is actually being rendered on the screen.", () => {
    expect(button).toBeInTheDocument();
  });

  test("selected if the button has the rounded attributes", () => {
    expect(button).toHaveAttribute("class",expect.stringMatching(/buttonrounded/i));
  });

  test("selected if the button is enabled by default", () => {
    expect(button).not.toBeDisabled();
  });

  test("stested if when disabled the button has the disabled style", () => {
    // Given
    render(
      <ButtonRounded label={"save"} action={"click"} color={"red"} disabled={true}/>
    );
    // When
    const buttondisabled = screen.getByRole("button", { name: /save/i });

    // Then
    expect(buttondisabled).toHaveAttribute( "class", expect.stringMatching(/disable/i));
  });

});
