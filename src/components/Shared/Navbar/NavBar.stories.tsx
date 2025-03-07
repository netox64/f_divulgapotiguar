import { Meta, StoryObj } from "@storybook/react";
import { NavBar } from ".";

//create metadata of component
const meta: Meta<typeof NavBar> = {
  title: "Components/NavBar",
  component: NavBar,
  tags: ["autodocs"],
};
export default meta;

//define objts and create component variations ...
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  render: () => <NavBar />,
};
