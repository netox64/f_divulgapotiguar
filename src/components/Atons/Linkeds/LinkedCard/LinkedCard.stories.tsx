import { Meta, StoryObj } from '@storybook/react';
import { LinkedCard } from '.';

const meta: Meta<typeof LinkedCard> = {
  title: 'Components/Links/LinkedCard',
  component: LinkedCard,
  tags: ['autodocs'],
  argTypes: {
    texto: {
      control: 'text',
      description: 'Texto exibido dentro do cartão.',
    },
    destino: {
      control: 'text',
      description: 'Destino do link quando o cartão é clicado.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `O componente **LinkedCard** é um link estilizado que redireciona o usuário para um destino específico.
        Ele é útil para criar botões de navegação chamativos, utilizando um gradiente de cores e um ícone ilustrativo.`
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof LinkedCard>;

export const Default: Story = {
  args: {
    texto: 'Clique Aqui',
    destino: '/exemplo',
  },
  render: (args) => <LinkedCard {...args} />,
  parameters: {
    docs: {
      description: {
        story: `Esta história demonstra o **LinkedCard** com um texto e um destino padrão.
        Ele pode ser usado como um botão estilizado para navegação dentro da aplicação.`
      },
    },
  },
};