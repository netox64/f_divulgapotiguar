import { Meta, StoryObj } from "@storybook/react";
import { LinkStyleButton } from ".";

const meta: Meta<typeof LinkStyleButton> = {
  title: "Components/Links/LinkStyleButton",
  component: LinkStyleButton,
  tags: ["autodocs"],
  argTypes: {
    colorOne: {
      control: {
        type: 'color',
        presetColors: ["red", "blue", "green", "yellow", "pink", "indigo", "teal"]
      },
    },
    colorTwo: {
      control: {
        type: 'color',
        presetColors: ["red", "blue", "green", "yellow", "pink", "indigo", "teal"]
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof LinkStyleButton>;

export const Default: Story = {
  args: {
    colorOne: "green",
    colorTwo: "blue",
    label: "O imóvel que você procura esta aqui!",
  },
  render: (args) => <LinkStyleButton {...args} />,
};

export const Transparent: Story = {
  args: {
    colorOne: "green",
    colorTwo: "blue",
    label: "O imóvel que você procura esta aqui!",
  },
  render: (args) => <LinkStyleButton {...args} transparent={true} />,
};
