import { Meta, StoryObj } from '@storybook/react';
import { SmallButton } from '.';

const meta: Meta<typeof SmallButton> = {
    title: 'Components/Buttons/SmallButton',
    component: SmallButton,
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: 'Defines the text displayed inside the button.',
        },
        active: {
            control: 'boolean',
            description: 'Determines whether the button is active or disabled.',
        },
        type: {
            control: { type: 'radio' },
            options: ['submit', 'reset', 'button', undefined],
            description: 'Specifies the button type: submit, reset, or a standard button.',
        },
        fnClick: {
            action: 'clicked',
            description: 'Function triggered when clicking the button.',
        },
    },
    parameters: {
        docs: {
            description: {
                component: `The **SmallButton** component is a rounded button with customizable properties such as label, activation state, and type.
                It is ideal for UI interactions requiring a modern, clean look.
                The button can be set to active or disabled, affecting both its appearance and functionality.`,
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof SmallButton>;

export const Default: Story = {
    args: {
        label: 'Click Me',
        active: true,
        type: 'button',
    },
    render: (args) => <SmallButton {...args} />,
    parameters: {
        docs: {
            description: {
                story: `This example demonstrates the **SmallButton** in its default active state. The button is fully interactive and triggers an action when clicked.`,
            },
        },
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled',
        active: false,
        type: 'button',
    },
    render: (args) => <SmallButton {...args} />,
    parameters: {
        docs: {
            description: {
                story: `This story showcases the **SmallButton** in a disabled state. A disabled button does not respond to user interactions and has a distinct visual style to indicate its state.`,
            },
        },
    },
};

export const SubmitButton: Story = {
    args: {
        label: 'Submit',
        active: true,
        type: 'submit',
    },
    render: (args) => <SmallButton {...args} />,
    parameters: {
        docs: {
            description: {
                story: `This example demonstrates the **SmallButton** with the **submit** type. Useful for forms where the button submits data when clicked.`,
            },
        },
    },
};
