import { ReactNode } from "react";
import styles from "./fivecent.module.css";
import clsx from "clsx";

export interface ContainerFiveCentProps {
  position:"start"| "end"| "center"| "between"| "around"| "evenly";
  children: ReactNode;
}

export const ContainerFiveCent = ({position,children }: ContainerFiveCentProps) => {
    const positionClass = clsx(styles.fivecent,{
        [`w-1/2 p-4 flex flex-col justify-start items-center`]: position==="start",
        [`w-1/2 p-4 flex flex-col justify-end items-center`]: position==="end",
        [`w-1/2 p-4 flex flex-col justify-center items-center`]: position==="center",
        [`w-1/2 p-4 flex flex-col justify-between items-center`]: position==="between",
        [`w-1/2 p-4 flex flex-col justify-around items-center`]: position==="around",
        [`w-1/2 p-4 flex flex-col justify-evenly items-center`]: position==="evenly",
      });
  return (
    <div
      className={positionClass}
    >
      {children}
    </div>
  );
};
