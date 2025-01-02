import { ReactNode } from "react";
import styles from "./sectiontwo.module.css";

export interface ISectionTwoProps {
  children?: ReactNode[];
}

export const SectionTwo = ({ children }: ISectionTwoProps) => {
  return (
    <div className={`w-full min-h-screen bg-slate-50 ${styles.sectiontwo}`}>
      {children}
    </div>
  );
};
