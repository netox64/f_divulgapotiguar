import { Meta, StoryObj } from "@storybook/react";
import { CardSelectRoundedPlano, ICardSelected } from ".";
import { PLimited } from "@/components/Atons/Texts/PLimited";
import React, { useState } from "react";

const meta: Meta<typeof CardSelectRoundedPlano> = {
  title: "Components/Cards/CardSelectRoundedPlano",
  component: CardSelectRoundedPlano,
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component: `O **CardSelectRoundedPlano** é um card circular clicável que pode ser usado para seleção de planos ou outras opções.
        Ele pode exibir um título e um conteúdo dentro dele.`
      },
    },
  },
};

export default meta;

type Story = StoryObj<ICardSelected>;

// Criando um wrapper para gerenciar o estado de seleção dentro do Storybook
const Wrapper = (args: ICardSelected) => {
  const [selected, setSelected] = useState(false);

  return (
    <CardSelectRoundedPlano
      {...args}
      checked={selected}
      fnCheck={() => setSelected(!selected)}
    />
  );
};

export const Default: Story = {
  args: {
    id: 1,
    title: "Plano Básico",
    children: <PLimited texto="2 anúncios/mês" />,
  },
  render: (args) => <Wrapper {...args} />,
  parameters: {
    docs: {
      description: {
        story: `Esta história demonstra o **CardSelectRoundedPlano** com um título e uma descrição interna.
        O card pode ser clicado para alterar seu estado de seleção.`,
      },
    },
  },
};

export const Selecionado: Story = {
  args: {
    id: 2,
    title: "Plano Premium",
    checked: true,
    children: <PLimited texto="10 anúncios/mês" />,
  },
  render: (args) => <CardSelectRoundedPlano {...args} />,
  parameters: {
    docs: {
      description: {
        story: `Aqui temos um exemplo do **CardSelectRoundedPlano** já selecionado por padrão.
        Ele pode ser usado para destacar um plano premium ou uma opção especial.`,
      },
    },
  },
};

export const SemSeleção: Story = {
  args: {
    id: 3,
    title: "Plano Avançado",
    checked: false,
    children: <PLimited texto="30 anúncios/mês" />,
  },
  render: (args) => <CardSelectRoundedPlano {...args} />,
  parameters: {
    docs: {
      description: {
        story: `Este exemplo apresenta o **CardSelectRoundedPlano** em estado **não selecionado**.
        Ele pode ser usado para planos opcionais que ainda não foram escolhidos pelo usuário.`,
      },
    },
  },
};
