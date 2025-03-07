'use client';

import { ReactNode, useEffect } from "react";
import { NavItem } from "../../Atons/NavItem";
import { usePathname } from 'next/navigation';
export interface INavBarProps {
    children: ReactNode;
}

export const NavBar = () => {
    let arrayRoutes = ["home", "register", "contact", "login"];
    const excludeLogin = ['/manager', '/profile', '/dashboard', '/planos', '/categorias', "/anuncios", "/imoveis", "/adquiridos", "/anuncios", "/usuarios", "/submissao", "/analisar"];
    const url = usePathname();

    const shouldHideLogin = excludeLogin.some((route) => url && url.startsWith(route));
    arrayRoutes = shouldHideLogin ? arrayRoutes.filter((route) => route !== 'login') : arrayRoutes;

    return (
        <nav className="w-full min-w-[70%] sm:max-h-[50px] mx-auto sm:border-2 sm:border-[#0b7dda] sm:rounded-full">
            <ul className="flex flex-col md:flex-row justify-end items-center">
                {arrayRoutes.map((Item: string) => (
                    <li key={Item} className="flex justify-center items-center px-5 py-2">
                        <NavItem routeName={Item} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};
