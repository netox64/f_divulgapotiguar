import React from "react";

export interface IAvatarUpdateFieldProps {
    textlabel: string;
    textfield: string;
};
export const AvatarUpdateField: React.FC<IAvatarUpdateFieldProps> = ({ textlabel, textfield }) => {
    return (
        <div className="flex items-center justify-between" data-testid="avatar-update-field">
            <div className="text-xs lg:text-base font-medium text-gray-700" >{textlabel}:</div>
            <div className="text-xs lg:text-base text-teal-600">{textfield ? textfield : "Inexistente"}</div>
        </div>
    );
}