import { ReactNode } from "react";
import styles from "./sectionone.module.css";

interface ISectionOneProps {
  children: ReactNode[];
}
export const SectionOne: React.FC<ISectionOneProps> = ({children}) => {
  return (
    <div className={`w-full min-h-screen bg-white`}>
      <div className={`w-full min-h-screen bg-white ${styles.backgroundSvg}`}>
        {children}
      </div>
    </div>
  );
};
