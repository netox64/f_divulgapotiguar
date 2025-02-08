import { Meta, StoryObj } from "@storybook/react";
import { ButtonRoundedLink } from ".";

const meta: Meta<typeof ButtonRoundedLink> = {
  title: "Components/Buttons/ButtonRoundedLink",
  component: ButtonRoundedLink,
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

type Story = StoryObj<typeof ButtonRoundedLink>;

export const Default: Story = {
  args: {
    colorOne: "green",
    colorTwo: "blue",
    label: "O imóvel que você procura esta aqui!",
  },
  render: (args) => <ButtonRoundedLink {...args} />,
};

export const Transparent: Story = {
  args: {
    colorOne: "green",
    colorTwo: "blue",
    label: "O imóvel que você procura esta aqui!",
  },
  render: (args) => <ButtonRoundedLink {...args} transparent={true} />,
};
