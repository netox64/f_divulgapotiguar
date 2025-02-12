import React from "react";

export interface IButtonEditIconProps {
    fnClic: () => void;
};

export const AvatarButtonEditIcon: React.FC<IButtonEditIconProps> = ({ fnClic }) => {
    return (
        <button className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200" onClick={fnClic}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-gray-600" data-testid="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M16.25 3.75a2.121 2.121 0 113 3L7.5 19.5l-4 1 1-4L16.25 3.75z" />
            </svg>
        </button>
    );
}