"use client";

import clsx from "clsx";
import styles from "./buttonrounded.module.css";

export interface IButtonRoundedProps {
  label: string;
  colorOne: "red" | "blue" | "green" | "yellow" | "pink" | "indigo" | "teal";
  colorTwo: "red" | "blue" | "green" | "yellow" | "pink" | "indigo" | "teal";
  disabled?: boolean;
  transparent?: boolean;
  action: actions;
}

export type actions = "submit" | "click" | "log";

export const ButtonRoundedLink = ({ colorOne, colorTwo, label, disabled = false, transparent = false, action}: IButtonRoundedProps) => {
  const handleClick = (action: actions) => {
    if (action === "submit") {
      console.log("submit");
    } else if (action === "click") {
      console.log("click");
    } else {
      console.log("log");
    }
  };

  const buttonClasses = clsx(styles.buttonrounded, {
    [`bg-gradient-to-r from-${colorOne}-500 to-${colorTwo}-700 text-white`]: !transparent,
    [`bg-white border-2 border-${colorOne}-500 text-${colorOne}-500`]: transparent,
    [styles.disable]: disabled,
  });

  const textClasses = clsx({
    [`text-sm font-bold`]: !transparent,
    [`text-sm font-bold text-${colorOne}-500 hover:text-${colorOne}-700`]: transparent,
    [styles.disable]: disabled,
  });

  return (
    <button className={buttonClasses} onClick={() => handleClick(action)} disabled={disabled}>
      <h3 className={textClasses}>{label}</h3>
    </button>
  );
};
