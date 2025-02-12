import { Meta, StoryObj } from '@storybook/react';
import { CardAnuncio } from '.';

const meta: Meta<typeof CardAnuncio> = {
  title: 'Components/Cards/CardAnuncio',
  component: CardAnuncio,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    img: {
      control: { type: 'text' },
    },
    body: {
      control: { type: 'text' },
    },
    url: {
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `O componente **CardAnuncio** exibe informações sobre um anúncio, incluindo título, imagem e uma descrição. Ele possui um botão de ação que redireciona o usuário para a URL do anúncio. Ideal para exibir itens de forma compacta em uma interface limpa e moderna.`
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof CardAnuncio>;

export const Default: Story = {
  args: {
    title: 'Anúncio Exemplo',
    img: 'resort-town.jpg',
    body: 'Esta é uma descrição curta do item anunciado. O texto é limitado a um número de caracteres para uma apresentação compacta.',
    url: '/anuncio/1',
  },
  render: (args) => <CardAnuncio {...args} />,
  parameters: {
    docs: {
      description: {
        story: `Este exemplo mostra o **CardAnuncio** com título, imagem e descrição. Ao clicar no botão, o usuário é redirecionado para o link fornecido.`
      },
    },
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Anúncio sem Imagem',
    img: 'resort-town.jpg',
    body: 'Este é um anúncio sem imagem, mas com o restante das informações visíveis.',
    url: '/anuncio/2',
  },
  render: (args) => <CardAnuncio {...args} />,
  parameters: {
    docs: {
      description: {
        story: `Este exemplo mostra o **CardAnuncio** sem imagem, utilizando uma imagem padrão quando nenhuma imagem é fornecida.`
      },
    },
  },
};

export const LongText: Story = {
  args: {
    title: 'Anúncio com Texto Longo',
    img: 'resort-town.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis odio vitae dui cursus, ac vestibulum tortor varius. Integer consequat, lectus sed hendrerit ullamcorper, leo lectus fringilla eros, ut condimentum magna erat sed metus.',
    url: '/anuncio/3',
  },
  render: (args) => <CardAnuncio {...args} />,
  parameters: {
    docs: {
      description: {
        story: `Este exemplo mostra o **CardAnuncio** com uma descrição longa que será limitada automaticamente para manter a aparência compacta.`
      },
    },
  },
};

export const RedirectButton: Story = {
  args: {
    title: 'Anúncio com Redirecionamento',
    img: 'resort-town.jpg',
    body: 'Clique no botão para ser redirecionado para a página do anúncio.',
    url: '/anuncio/4',
  },
  render: (args) => <CardAnuncio {...args} />,
  parameters: {
    docs: {
      description: {
        story: `Este exemplo demonstra o **CardAnuncio** com um botão "Ver" que redireciona para uma URL ao ser clicado.`
      },
    },
  },
};
