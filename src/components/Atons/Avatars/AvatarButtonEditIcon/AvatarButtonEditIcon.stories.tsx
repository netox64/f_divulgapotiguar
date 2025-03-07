import { Meta, StoryObj } from '@storybook/react';
import { AvatarButtonEditIcon, IButtonEditIconProps } from './';

const meta: Meta<typeof AvatarButtonEditIcon> = {
    title: 'Components/Avatars/AvatarButtonEditIcon',
    component: AvatarButtonEditIcon,
    tags: ['autodocs'],
    argTypes: {
        fnClic: { action: 'clicked' },
    },
    parameters: {
        docs: {
            description: {
                component: `O componente **AvatarButtonEditIcon** é um botão flutuante para edição, posicionado no canto superior direito. Ele contém um ícone de lápis e dispara uma ação ao ser clicado.`
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof AvatarButtonEditIcon>;

export const Default: Story = {
    args: {
        fnClic: () => console.log('Edit button clicked'),
    },
    render: (args) => <div className='flex items-center justify-center p-10'><AvatarButtonEditIcon {...args} /></div>,
    parameters: {
        docs: {
            description: {
                story: `Esta história demonstra o **AvatarButtonEditIcon** no estado padrão. O botão possui um ícone de lápis e pode ser usado para ações de edição.`
            },
        },
    },
};