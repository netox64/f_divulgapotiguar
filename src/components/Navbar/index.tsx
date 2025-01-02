import { ReactNode } from "react";
import styles from "./navbar.module.css";
import { NavItem } from "../Atons/NavItem";

export interface INavBarProps {
  children: ReactNode;
}

export const NavBar = () => {
  const arrayRoutes = ["home", "register", "contact", "manager"];

  return (
    <nav className={styles.navbar}>
      <ul className="flex justify-end items-center">
        {arrayRoutes.map((Item: string, iterator: number) => (
          <li
            key={iterator}
            className="flex justify-center items-center px-5 py-2"
          >
            <NavItem routeName={Item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
