import { Meta, StoryObj } from "@storybook/react";
import { LinkButtonRounded } from ".";

const meta: Meta<typeof LinkButtonRounded> = {
  title: "Components/LinkButtonRounded",
  component: LinkButtonRounded,
  tags: ["autodocs"],
  argTypes: {
    colorOne: {
      control: {
        type: 'color',
        presetColors: ["red","blue","green","yellow","pink","indigo","teal"]
      },
    },
    colorTwo: {
      control: {
        type: 'color',
        presetColors: ["red","blue","green","yellow","pink","indigo","teal"]
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof LinkButtonRounded>;

export const Default: Story = {
  args: {
    colorOne: "green",
    colorTwo: "blue",
    label: "O imóvel que você procura esta aqui!",
    url:"/",
  },
  render: (args) => <LinkButtonRounded {...args} />,
};

export const Transparent: Story = {
  args: {
    colorOne: "green",
    colorTwo: "blue",
    label: "O imóvel que você procura esta aqui!",
    url:"/",
  },
  render: (args) => <LinkButtonRounded {...args} transparent={true}/>,
};
