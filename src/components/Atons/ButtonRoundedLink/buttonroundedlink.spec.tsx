import { render, screen } from "@testing-library/react";
import { ButtonRoundedLink } from ".";

describe("<ButtonRoundedLink />", () => {
  render(
    <ButtonRoundedLink
      label={"save"}
      action={"click"}
      colorOne={"red"}
      colorTwo={"red"}
    />
  );
  const button = screen.getByRole("button", { name: /save/i });

  test("check if the component is actually being rendered on the screen.", () => {
    expect(button).toBeInTheDocument();
  });

  test("selected if the button has the rounded attributes", () => {
    expect(button).toHaveAttribute(
      "class",
      expect.stringMatching(/buttonrounded/i)
    );
  });

  test("selected if the button is enabled by default", () => {
    expect(button).not.toBeDisabled();
  });

  test("stested if when disabled the button has the disabled style", () => {
    render(
      <ButtonRoundedLink
        label={"save"}
        action={"click"}
        colorOne={"red"}
        colorTwo={"red"}
        disabled={true}
      />
    );
    const buttondisabled = screen.getByRole("button", { name: /save/i });
    expect(buttondisabled).toHaveAttribute(
      "class",
      expect.stringMatching(/disable/i)
    );
  });

  //TODO:testar chamada de eventos
});
