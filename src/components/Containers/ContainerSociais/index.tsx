import { ReactNode } from "react";

export interface IContainerRedesSociaisProps {
  children: ReactNode;
}

export const ContainerRedesSociais = ({children,}: IContainerRedesSociaisProps) => {
  return <div className={"flex flex-wrap justify-center gap-4 mt-10 px-4 sm:px-6 md:px-8"}>{children}</div>;
};
