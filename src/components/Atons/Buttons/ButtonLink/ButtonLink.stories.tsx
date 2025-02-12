import { Meta, StoryObj } from "@storybook/react";
import { ButtonLink } from ".";

const meta: Meta<typeof ButtonLink> = {
  title: "Components/Buttons/ButtonLink",
  component: ButtonLink,
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

type Story = StoryObj<typeof ButtonLink>;

export const Default: Story = {
  args: {
    colorOne: "green",
    colorTwo: "blue",
    label: "O imóvel que você procura esta aqui!",
    url:"/",
  },
  render: (args) => <ButtonLink {...args} />,
};

export const Transparent: Story = {
  args: {
    colorOne: "green",
    colorTwo: "blue",
    label: "O imóvel que você procura esta aqui!",
    url:"/",
  },
  render: (args) => <ButtonLink {...args} transparent={true}/>,
};