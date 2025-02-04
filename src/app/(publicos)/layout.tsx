import type { Metadata } from "next";
import "../globals.css";
import { Footer, Header, Logo, NavBar } from "@/components/Shared";
import { SpaceToast } from "@/components/Atons";

export const metadata: Metadata = {
  title: "Divulga Potiguar",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <body className={"w-full min-h-[100vh] bg-white"}>
        <Header bg={"white"}>
          <Logo />
          <NavBar />
        </Header>
        <SpaceToast />
        {children}
        <Footer />
      </body>
    </html>
  );
}
