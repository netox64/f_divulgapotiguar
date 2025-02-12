"use client";

import clsx from "clsx";
import Link from "next/link";

export interface IButtonRoundedProps {
  label: string; transparent?: boolean; referencia: string; url: string;
  colorOne: "red" | "blue" | "green" | "yellow" | "pink" | "indigo" | "teal";
  colorTwo: "red" | "blue" | "green" | "yellow" | "pink" | "indigo" | "teal";
}

export const LinkStyleButton = ({ colorOne, colorTwo, label, transparent = false, url, referencia }: IButtonRoundedProps) => {
  const buttonClasses = clsx(
    "min-w-[100px] lg:min-w-fit max-w-[200px] h-[50px] lg:px-[14px] py-[14px] inline-block rounded-full",
    {
      [`bg-gradient-to-r from-${colorOne}-500 to-${colorTwo}-700 text-white`]: !transparent,
      [`bg-white border-2 border-${colorOne}-500 text-${colorOne}-500`]: transparent,
    },
  );

  const textClasses = clsx(
    " text-center text-sm font-bold text-xs lg:text-base",
    {
      [`text-${colorOne}-500 hover:text-${colorOne}-700`]: transparent,
    },
  );

  return (
    <Link href={`${url}#${referencia}`} className={buttonClasses} >
      <h3 className={textClasses}>{label}</h3>
    </Link>
  );
};
