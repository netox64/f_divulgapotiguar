"use client";

import { signOut } from "next-auth/react";

export const Logout = () => {
    const handleLogout = () => {
        signOut({ callbackUrl: "/" });
    };

    return (
        <button onClick={handleLogout} className="w-full mt-10 text-center text-white hover:text-red-600 font-bold p-3 active:scale-95
         active:text-red-800 cursor-pointer" data-testid="logout">
            Sair
        </button>
    );
}