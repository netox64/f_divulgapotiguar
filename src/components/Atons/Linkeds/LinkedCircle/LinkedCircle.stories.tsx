import { Meta, StoryObj } from '@storybook/react';
import { LinkedCircle } from '.';

const meta: Meta<typeof LinkedCircle> = {
    title: "Components/Links/LinkedCircle",
    component: LinkedCircle,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `O componente **LinkedCircle** é um componente de link que exibe uma imagem circular. Ele é ideal para ser usado em links de redes sociais.`
            }
        }
    }
}
export default meta;
type Story = StoryObj<typeof LinkedCircle>;
export const Default: Story = {
    render: () => (<LinkedCircle endereco={"/"} />),
    parameters: {
        docs: {
            description: {
                story: `Esta história demonstra o **LinkedCircle** link default`,
            },
        },
    },
};

export const Instagram: Story = {
    render: () => (<LinkedCircle endereco={"/"} imagem={"instagram.svg"} />),
    parameters: {
        docs: {
            description: {
                story: `Esta história demonstra o **LinkedCircle** do instagram`,
            },
        },
    },
};
