import { ReactNode } from "react";
import styles from "./header.module.css";
import React from "react";

interface IHeaderprops {
  bg: "white" | "dark";
  children?: ReactNode;
}

export const Header = ({ bg, children }: IHeaderprops) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <header className={`w-full grid grid-cols-1 md:grid-cols-[20%,80%] ${styles.header} ${bg === "white" ? styles.white : styles.dark}`}>
      <div className="flex justify-start items-center"> {childrenArray[0]}</div>
      <div className="flex justify-center items-center me-24"> {childrenArray[1]}</div>
    </header>
  );
};
