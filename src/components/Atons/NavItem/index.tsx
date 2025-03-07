import Link from "next/link";

export interface INavItemProps {
  routeName: string;
}
export const NavItem = ({ routeName }: INavItemProps) => {
  return (
    <Link data-testid="nav-link" href={`/` + (routeName==="home" ? "" : routeName) }>
      {routeName.toLocaleUpperCase()}
    </Link>
  );
};
