"use client";
import React, { useEffect } from "react";

export interface IAvatarUpdateProps {
    preview?: string;
    modeUpdate: boolean;
};

export const AvatarUpdate: React.FC<IAvatarUpdateProps> = ({ preview, modeUpdate }) => {

    useEffect(() => { }, [preview]);
    return (
        <div className="w-28 h-28 bg-gradient-to-tr from-custom-blue to-green-600 rounded-full p-1 shadow-lg">
            <img src={preview != "avatar.svg" ? preview : "/imgs/avatar.svg"} alt="User Avatar" className="w-full h-full rounded-full object-cover border-4 border-white" />
        </div>
    );
}