import { Meta, StoryObj } from '@storybook/react';
import { CardBasic } from '.';
import { PLimited } from '@/components/Atons/Texts';

const meta: Meta<typeof CardBasic> = {
    title: 'Components/Cards/CardBasic',
    component: CardBasic,
    tags: ['autodocs'],
    argTypes: {
        title: {
            options: ['Um titulo mediano ... que vai ser renderizado #1', 'Um Pequeno  #2'],
            control: { type: 'radio' },
        },
        guidance: {
            options: ['Horizontal', 'Vertical'],
            control: { type: 'radio' },
        },
    },
    parameters: {
        docs: {
            description: {
                component: `O componente **CardBasic** é um card que exige um componente de texto a ser passado como children.`
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof CardBasic>;

export const Default: Story = {
    args: {
        title: 'Um Titulo #1',
        guidance: "Vertical",
    },
    render: (args) => <CardBasic {...args}><PLimited texto={'Algum texto'} /></CardBasic>,
    parameters: {
        docs: {
            description: {
                story: `Esta história demonstra o **CardBasic** em várias cores sem o estilo de transparência. Clique no botão para disparar a ação associada. Ideal para uso em botões de ação visualmente distintos.`
            },
        },
    },
};

export const Horizontal: Story = {
    args: {
        title: 'Qualquer',
        guidance: "Horizontal",
    },
    render: (args) => <CardBasic {...args}><PLimited texto={'Algum texto'} /></CardBasic>,
    parameters: {
        docs: {
            description: {
                story: `Aqui temos o **CardBasic** com o estilo de transparência ativado. A transparência altera o fundo do botão para torná-lo parcialmente invisível, permitindo que o fundo da página ou do componente seja visível através dele. Esse estilo é útil quando o botão precisa se integrar a um fundo dinâmico ou quando você deseja um visual mais sutil.`
            },
        },
    },
};