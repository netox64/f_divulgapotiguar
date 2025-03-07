import { ReactNode } from "react";

export interface ISectionTwoProps {
  children?: ReactNode[];
}

export const SectionThree = ({ children }: ISectionTwoProps) => {
  return (
    <div className={`w-full h-auto py-10 bg-white flex flex-col`}>
      {children}
    </div>
  );
};
