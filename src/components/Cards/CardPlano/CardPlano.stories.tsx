import { Meta, StoryObj } from "@storybook/react";
import { CardPlano, ICardPlanoProps } from "./";
import { useRouter } from "next/navigation";
import React from "react";

const mockUseRouter = () => ({
  push: () => {},
  replace: () => {},
  prefetch: () => {},
  back: () => {},
  forward: () => {},
  refresh: () => {},
  pathname: "/",
});

const MockRouterProvider = ({ children }: { children: React.ReactNode }) => {
  (useRouter as jest.Mock).mockImplementation(mockUseRouter);
  return <>{children}</>;
};

const meta: Meta<typeof CardPlano> = {
  title: "Components/Cards/CardPlano",
  component: CardPlano,
  decorators: [
    (Story) => (
      <MockRouterProvider>
        <Story />
      </MockRouterProvider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    valor: { control: { type: "number" } },
    quantAnuncio: { control: { type: "number" } },
    duracao: { control: { type: "number" } },
    link: { control: { type: "text" } },
    textButton: { control: { type: "text" } },
  },
  parameters: {
    docs: {
      description: {
        component: `O **CardPlano** exibe informações sobre um plano de anúncios, incluindo preço, quantidade de anúncios permitidos, duração e benefícios.
            Ele também pode conter um botão de ação para direcionar o usuário a uma página de checkout.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<ICardPlanoProps>;

export const Default: Story = {
  args: {
    planoId: 1,
    nome: "Plano Premium",
    valor: 199,
    quantAnuncio: 10,
    duracao: 2,
    dataValidade: new Date(2026, 1, 1),
    dataAdquerido: new Date(2024, 1, 1),
    link: "/checkout",
    textButton: "Assinar agora",
  },
  render: (args) => <CardPlano {...args} />,
};

export const SemBotao: Story = {
  args: {
    planoId: 2,
    nome: "Plano Básico",
    valor: 99,
    quantAnuncio: 5,
    duracao: 1,
    dataValidade: new Date(2025, 1, 1),
    dataAdquerido: new Date(2024, 1, 1),
    link: undefined,
    textButton: undefined,
  },
  render: (args) => <CardPlano {...args} />,
};

export const ComDuracaoLonga: Story = {
  args: {
    planoId: 3,
    nome: "Plano Vitalício",
    valor: 499,
    quantAnuncio: 50,
    duracao: 10,
    dataValidade: new Date(2034, 1, 1),
    dataAdquerido: new Date(2024, 1, 1),
    link: "/checkout",
    textButton: "Assinar agora",
  },
  render: (args) => <CardPlano {...args} />,
};
