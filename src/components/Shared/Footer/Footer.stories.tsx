import { Meta, StoryObj } from "@storybook/react";
import { Footer } from ".";

// Create metadata of component
const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    description: {
      component: `O componente **Footer** é um fotter elemento comun no qual possui vaios elementos de Link para outas localizações do site.`,
    },
  },
};
export default meta;

// Define objects and create component variations
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => <Footer />,
};
