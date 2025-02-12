import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { ButtonRounded } from ".";

const meta: Meta<typeof ButtonRounded> = {
    title: "Components/Buttons/ButtonRounded",
    component: ButtonRounded,
    tags: ["autodocs"],
    argTypes: {
        color: {
            control: { type: "color" },
            description: "Define a cor do botão.",
            options: ["red", "blue", "green", "yellow", "pink", "indigo", "teal"],
        },
        label: {
            control: "text",
            description: "Texto exibido dentro do botão.",
        },
        transparent: {
            control: "boolean",
            description: "Define se o botão será transparente.",
        },
        disabled: {
            control: "boolean",
            description: "Define se o botão estará desabilitado.",
        },
        fnClick: {
            action: "clicked",
            description: "Função disparada ao clicar no botão.",
        },
    },
    parameters: {
        docs: {
            description: {
                component: `O **ButtonRounded** é um botão arredondado personalizável, ideal para ações que exigem interação do usuário. Ele suporta diferentes cores, transparência e estados.`,
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof ButtonRounded>;

const simulateClick = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button");
    await userEvent.click(button);
};

export const Default: Story = {
    args: {
        color: "indigo",
        label: "Indigo",
        fnClick: () => console.log("Botão clicado!"),
    },
    render: (args) => <ButtonRounded {...args} />,
    play: simulateClick,
    parameters: {
        docs: {
            description: {
                story: `Demonstra o **ButtonRounded** com uma cor definida. Clique para testar a interação.`,
            },
        },
    },
};

export const Transparent: Story = {
    args: {
        color: "indigo",
        label: "Transparente",
        transparent: true,
        fnClick: () => console.log("Botão transparente clicado!"),
    },
    render: (args) => <ButtonRounded {...args} />,
    parameters: {
        docs: {
            description: {
                story: `O botão com transparência ativada, permitindo que o fundo seja visível através dele.`,
            },
        },
    },
};

export const Disabled: Story = {
    args: {
        label: "Desativado",
        color: "red",
        disabled: true,
        fnClick: () => console.log("Esse clique não deveria acontecer"),
    },
    render: (args) => <ButtonRounded {...args} />,
    parameters: {
        docs: {
            description: {
                story: `Exemplo do **ButtonRounded** no estado **desativado**. Ele não responde a cliques.`,
            },
        },
    },
};
