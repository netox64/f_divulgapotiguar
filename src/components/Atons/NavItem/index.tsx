import Link from "next/link";
import styles from "./navitem.module.css";

export interface INavItemProps {
  routeName: string;
}
export const NavItem = ({ routeName }: INavItemProps) => {
  return (
    <Link className={styles.navitem} data-testid="nav-link" href={`/` + routeName}>
      {routeName.toLocaleUpperCase()}
    </Link>
  );
};
