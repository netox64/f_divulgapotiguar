import { ReactNode } from "react";

export interface ILayoutManagerProps {
    children: ReactNode[];
}
export const LayoutManager: React.FC<ILayoutManagerProps> = ({ children }) => {
    return (
        <div className="w-full flex flex-col md:flex-row" data-testid="layout-manager">
            <div className="p-4 md:w-[35%] lg:w-[35%] xl:w-[15%]" data-testid="container-sidebar">
                {children[0]}
            </div>
            <div className="p-4 flex flex-row flex-wrap md:w-[65%] xl:w-[85%]" data-testid="container-content">
                {children[1]}
            </div>
        </div>

    );
}