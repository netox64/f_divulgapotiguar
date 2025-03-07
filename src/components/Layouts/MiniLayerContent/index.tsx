import React, { ReactNode } from "react";

export interface IMiniLayerContentProps{
    children: ReactNode[];
};

export const MiniLayerContent: React.FC<IMiniLayerContentProps> = ({ children }) => {
    return (
        <div className="w-full flex flex-col md:flex-row gap-14 p-4">
            <div className="flex flex-col gap-4 w-full md:w-1/4">
                <div className="bg-gray-200 h-20 rounded">
                    {children[0]}
                </div>
                <div className="bg-gray-200 h-20 rounded">
                    {children[1]}
                </div>
                <div className="bg-gray-200 h-20 rounded">
                    {children[2]}
                </div>
                <div className="bg-gray-200 h-20 rounded">
                    {children[3]}
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-gray-200 flex-grow h-auto rounded">
                {children[4]}
            </div>
        </div>
    );
}