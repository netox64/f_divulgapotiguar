import { Header } from ".";
import { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "../Navbar";
import { Logo } from "..";

const meta: Meta<typeof Header> = {
  title: "Layers/Header",
  component: Header,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => (
    <Header bg={"white"}>
      <Logo />
      <NavBar />
    </Header>
  ),
};

export const Dark: Story = {
  render: () => (
    <Header bg={"dark"}>
      <Logo />
      <NavBar />
    </Header>
  ),
};