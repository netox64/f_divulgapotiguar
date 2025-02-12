import { Meta, StoryObj } from '@storybook/react';
import { CardImovel } from '.';
import { Imovel } from '@/components/Forms/types-models';

const meta: Meta<typeof CardImovel> = {
    title: 'Components/Cards/CardImovel',
    component: CardImovel,
    tags: ['autodocs'],
    argTypes: {
        extraContent: {
            control: false,
            description: "Conteúdo extra a ser exibido dentro do CardImovel.",
            table: {
                type: { summary: "ReactNode" },
                defaultValue: { summary: "null" },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: `O componente **CardImovel** exibe informações sobre um imóvel. 
                Ele pode ser personalizado com diferentes estilos e conteúdos adicionais.`
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof CardImovel>;
const ExtraContent = () => <div style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>Extra Content Aqui!</div>;

export const Default: Story = {
    args: {
        imovel: {
            imovelId: 1, nome: "Casa de Praia", localizacao: "Rua das Ondas, 123", areaCalculada: 100, comprimento: 10,
            largura: 10, tipo: "Casa", sobre: "Uma bela casa de praia com vista para o mar.",
            status: "Disponível", usuario: "João Silva", isAnunciado: true
        } as unknown as Imovel,
        extraContent: null,
    },
    render: (args) => <CardImovel {...args} />,
    parameters: {
        docs: {
            description: {
                story: `Esta história demonstra o **CardImovel** sem conteúdo extra por padrão. Você pode ativar o conteúdo extra passando um ReactNode.`,
            },
        },
    },
};

export const WithExtraContent: Story = {
    args: {
        ...Default.args, extraContent: <ExtraContent />,
    },
    render: (args) => <CardImovel {...args} />,
    parameters: {
        docs: {
            description: {
                story: `Esta história demonstra o **CardImovel** com um conteúdo extra opcional.`,
            },
        },
    },
};
