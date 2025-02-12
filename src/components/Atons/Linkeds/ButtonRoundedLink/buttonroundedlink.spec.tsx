import { render, screen } from "@testing-library/react";
import { LinkStyleButton } from ".";

describe("<LinkStyleButton />", () => {

  render(
    <LinkStyleButton label={"save"} colorOne={"red"} colorTwo={"red"} referencia={""} url={""} />
  );
  const button = screen.getByRole("link", { name: /save/i });

  test("check if the component is actually being rendered on the screen.", () => {
    expect(button).toBeInTheDocument();
  });

  test("selected if the button has the rounded attributes", () => {
    expect(button).toHaveAttribute("class", expect.stringMatching(
      /min-w-\[100px\]\s+lg:min-w-fit\s+max-w-\[200px\]\s+h-\[50px\]\s+lg:px-\[14px\]\s+py-\[14px\]\s+inline-block\s+rounded-full\s+bg-gradient-to-r\s+from-red-500\s+to-red-700\s+text-white/i
    ));
  });

  test("selected if the button is enabled by default", () => {
    expect(button).not.toBeDisabled();
  });

});
