import { ReactNode } from "react";

// import styles from "./.module.css";
export interface IContainerRedesSociaisProps {
  children: ReactNode;
}

export const ContainerRedesSociais = ({
  children,
}: IContainerRedesSociaisProps) => {
  return <div className={`flex mt-10`}>{children}</div>;
};
