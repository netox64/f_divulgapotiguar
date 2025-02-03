import { render, screen } from "@testing-library/react";
import { LinkButtonRounded } from ".";

describe("<LinkButtonRounded />", () => {
  // Given globals
  render(
    <LinkButtonRounded label={"save"} colorOne={"red"} colorTwo={"red"} url={""} />
  );

  // When globals
  const link = screen.getByRole("heading", { name: /save/i });


  
  test("check if the component is actually being rendered on the screen.", () => {

    // Then
    expect(link).toBeInTheDocument();
  });

});
