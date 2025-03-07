import { ReactNode } from 'react';

interface IContainerProps {
    marginTop?: "mt-36" | "mt-24" | "mt-12" | "mt-6" | "mt-3" | "mt-1";
    children?: ReactNode;
}

export const ContainerRows = ({ children, marginTop }: IContainerProps) => {
    return (
        <div className={`w-full h-auto flex flex-col md:flex-row justify-center items-center flex-wrap gap-4 px-5 ${marginTop}`} data-testid="container-rows">{children}</div>
    );
}