import { Meta, StoryObj } from "@storybook/react";
import { NavItem } from ".";

// Create metadata of component
const meta: Meta<typeof NavItem> = {
  title: "Components/NavItem",
  component: NavItem,
  tags: ["autodocs"],
};
export default meta;

// Define objects and create component variations
type Story = StoryObj<typeof NavItem>;

export const Default: Story = {
  render: () => <NavItem routeName={"Home"} />,
};
