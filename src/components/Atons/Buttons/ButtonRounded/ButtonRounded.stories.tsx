import { Meta, StoryObj } from "@storybook/react";
import { ButtonRounded } from ".";

const meta: Meta<typeof ButtonRounded> = {
  title: "Components/Buttons/ButtonRounded",
  component: ButtonRounded,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: 'color',
        presetColors: ["red","blue","green","yellow","pink","indigo","teal"]
      },
    },
    action: {
      options: ["click", "submit"],
      control: { type: "radio" },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `O componente **ButtonRounded** é um botão com bordas arredondadas. Ele aceita várias personalizações, como cor, rótulo, estado de desativado e transparência   Este componente é ideal para ações de interface de usuário onde uma aparência limpa e moderna é necessária  Ele pode ser configurado para diferentes estados, como ativo, desabilitado e transparente.`,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ButtonRounded>;

export const Default: Story = {
  args: {
    color: "indigo",
    label: "Indigo",
    action: "click",
  },

  render: (args) => <ButtonRounded {...args}/>,

  parameters: {
    docs: {
      description: {
        story: `Esta história demonstra o **ButtonRounded** em várias cores sem o estilo de transparência.  Clique no botão para disparar a ação associada. Ideal para uso em botões de ação visualmente distintos.`,
      },
    },
  }
};

export const Transparent: Story = {
  args: {
    color: "indigo",
    label: "Qualquer coisa",
    transparent: true,
    action: "click",
  },
  render: (args) => <ButtonRounded {...args} />,
  parameters: {
    docs: {
      description: {
        story: `Aqui temos o **ButtonRounded** com o estilo de transparência ativado. A transparência altera o fundo do botão para torná-lo parcialmente invisível,  permitindo que o fundo da página ou do componente seja visível através dele.  Esse estilo é útil quando o botão precisa se integrar a um fundo dinâmico ou quando você deseja um visual mais sutil.`,
      },
    },
  },
};

export const Disabled: Story = {
  render: () => (
    <ButtonRounded label={"Salvar"} color={"red"} action="click" disabled={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: `Este é um exemplo do **ButtonRounded** no estado **desabilitado**. Quando o botão está desabilitado, ele não responde a interações de clique e geralmente  apresenta um estilo visual diferente (como opacidade reduzida) para indicar que a ação não está disponível.`,
      },
    },
  },
};
