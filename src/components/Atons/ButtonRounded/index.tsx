"use client";

import clsx from "clsx";
import styles from "./buttonrounded.module.css";
import { actions, IButtonRoundedProps } from "./types";

export const ButtonRounded = ({
  color,
  label,
  disabled = false,
  transparent = false,
  action,
}: IButtonRoundedProps) => {
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
    [`bg-${color}-500 hover:bg-${color}-700 text-white`]: !transparent,
    [`bg-white text-${color}-500 hover:text-${color}-700 border-2 border-${color}-500 hover:border-${color}-700`]:
      transparent,
    [styles.disable]: disabled,
  });

  return (
    <button
      className={buttonClasses}
      onClick={() => handleClick(action)}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
