import { Meta, StoryObj } from "@storybook/react";
import { ButtonRounded } from ".";

const meta: Meta<typeof ButtonRounded> = {
  title: "Components/ButtonRounded",
  component: ButtonRounded,
  tags: ["autodocs"],
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
  render: () => (
    <>
      {" "}
      <ButtonRounded label={"Red"} color={"red"} action="click" />
      <ButtonRounded label={"Blue"} color={"blue"} action="click" />
      <ButtonRounded label={"Green"} color={"green"} action="click" />
      <ButtonRounded label={"Indigo"} color={"indigo"} action="click" />
      <ButtonRounded label={"Pink"} color={"pink"} action="click" />
      <ButtonRounded label={"Teal"} color={"teal"} action="click" />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: `Esta história demonstra o **ButtonRounded** em várias cores sem o estilo de transparência.  Clique no botão para disparar a ação associada. Ideal para uso em botões de ação visualmente distintos.`,
      },
    },
  },
};

// Exemplo de um botão transparente
export const Transparent: Story = {
  render: () => (
    <>
      {" "}
      <ButtonRounded
        label={"Red"}
        color={"red"}
        action="click"
        transparent={true}
      />
      <ButtonRounded
        label={"Blue"}
        color={"blue"}
        action="click"
        transparent={true}
      />
      <ButtonRounded
        label={"Green"}
        color={"green"}
        action="click"
        transparent={true}
      />
      <ButtonRounded
        label={"Indigo"}
        color={"indigo"}
        action="click"
        transparent={true}
      />
      <ButtonRounded
        label={"Pink"}
        color={"pink"}
        action="click"
        transparent={true}
      />
      <ButtonRounded
        label={"Teal"}
        color={"teal"}
        action="click"
        transparent={true}
      />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: `Aqui temos o **ButtonRounded** com o estilo de transparência ativado. A transparência altera o fundo do botão para torná-lo parcialmente invisível,  permitindo que o fundo da página ou do componente seja visível através dele.  Esse estilo é útil quando o botão precisa se integrar a um fundo dinâmico ou quando você deseja um visual mais sutil.`,
      },
    },
  },
};

// Exemplo de um botão desabilitado
export const Disabled: Story = {
  render: () => (
    <ButtonRounded
      label={"Salvar"}
      color={"red"}
      action="click"
      disabled={true}
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

// Especificação adicional dos parâmetros (para ações, eventos e controle de props)
Default.parameters = {
  actions: {
    handles: ["click", "submit"], // Definindo a ação do evento
  },
  controls: {
    // Usando o controle de props para testar diferentes valores
    expanded: "radio",
  },
};
