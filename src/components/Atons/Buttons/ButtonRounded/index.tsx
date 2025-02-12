"use client";

import clsx from "clsx";
import styles from "./buttonrounded.module.css";
export interface IButtonRoundedProps {
    label: string; color: "red" | "blue" | "green" | "yellow" | "pink" | "indigo" | "teal";
    disabled?: boolean;
    transparent?: boolean;
    fnClick?: () => void;
}

export const ButtonRounded = ({ color, label, disabled = false, transparent = false, fnClick }: IButtonRoundedProps) => {
    const handleClick = () => {
        if (fnClick) {
            fnClick();
        }
    };

    const buttonClasses = clsx(styles.buttonrounded, {
        [`bg-${color}-500 hover:bg-${color}-700 text-white my-3`]: !transparent,
        [`bg-white text-${color}-500 hover:text-${color}-700 border-2 border-${color}-500 my-3 hover:border-${color}-700`]: transparent,
        [styles.disable]: disabled,
    });

    return (
        <button className={buttonClasses} onClick={handleClick} disabled={disabled}>
            {label}
        </button>
    );
};
