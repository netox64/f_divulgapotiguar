"use client";

import clsx from "clsx";

export interface IButtonLinkProps {
  label: string;
  url: string;
  colorOne: "red" | "blue" | "green" | "yellow" | "pink" | "indigo" | "teal";
  colorTwo: "red" | "blue" | "green" | "yellow" | "pink" | "indigo" | "teal";
  disabled?: boolean;
  transparent?: boolean;
  fnClick?: (url: string) => void;
}

export const ButtonLink = ({ colorOne, colorTwo, label, disabled = false, transparent = false, url, fnClick }: IButtonLinkProps) => {
  const buttonClasses = clsx(
    "inline-block text-center rounded-md",
    {
      [`bg-gradient-to-r from-${colorOne}-500 to-${colorTwo}-700 text-white`]: !transparent,
      [`bg-white border-2 border-${colorOne}-500 text-${colorOne}-500`]: transparent,
      "cursor-not-allowed opacity-50": disabled,
    },
    "min-w-fit max-w-[200px] h-[40px] px-[25px] py-[10px] whitespace-nowrap"
  );

  const textClasses = clsx(
    "text-sm font-bold",
    {
      [`text-${colorOne}-500 hover:text-${colorOne}-700`]: transparent,
    },
    { "text-gray-500": disabled }
  );

  const handleClick = () => {
    if (!disabled && fnClick) {
      fnClick(url);
    }
  };

  return (
    <button className={buttonClasses} onClick={handleClick}>
      <h3 className={textClasses}>{label}</h3>
    </button>
  );
};