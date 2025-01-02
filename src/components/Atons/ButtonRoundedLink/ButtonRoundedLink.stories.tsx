import { Meta, StoryObj } from "@storybook/react";
import { ButtonRoundedLink } from ".";

const meta: Meta<typeof ButtonRoundedLink> = {
  title: "Components/ButtonRoundedLink",
  component: ButtonRoundedLink,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ButtonRoundedLink>;

export const Default: Story = {
  render: () => (
    <ButtonRoundedLink
      label={"O imóvel que você procura esta aqui!"}
      colorOne={"green"}
      colorTwo={"blue"}
      action="click"
    />
  ),
};

export const Transparent: Story = {
  render: () => (
    <ButtonRoundedLink
      label={"O imóvel que você procura esta aqui!"}
      colorOne={"green"}
      colorTwo={"blue"}
      action={"click"}
      transparent={true}
    />
  ),
};
