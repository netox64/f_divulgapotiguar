import { ReactNode } from "react";

export interface ISectionTwoProps {
  children?: ReactNode[];
}

export const SectionTwo = ({ children }: ISectionTwoProps) => {
  return (
    <div className={`w-full h-auto py-2 bg-slate-50 flex flex-col items-center`}>
      {children}
    </div>
  );
};
