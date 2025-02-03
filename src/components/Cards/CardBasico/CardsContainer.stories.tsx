import { Meta, StoryObj } from "@storybook/react";
import { CardBasico } from ".";

// Create metadata of component
const meta: Meta<typeof CardBasico> = {
  title: "Components/CardBasico",
  component: CardBasico,
  tags: ["autodocs"],
  parameters: {
    description: {
      component: `O componente **CardBasico** é um fotter elemento comun no qual possui vaios elementos de Link para outas localizações do site.`,
    },
  },
};
export default meta;

// Define objects and create component variations
type Story = StoryObj<typeof CardBasico>;

export const Default: Story = {
  args: {
    title: "Terreno Zona Norte", imagem: "",
    usuario: "neto#b2", dataAnuncio: new Date(),
    descricao: "terreno com area ampla para espaço e letramento sobre ampla gama de tetura..."
  },
  render: (args) => <CardBasico  {...args} />,
};
