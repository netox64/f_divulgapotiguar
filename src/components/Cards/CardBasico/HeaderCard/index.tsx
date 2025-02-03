export interface IHeaderCardProps {
    title: string;
}

export const HeaderCard = ({ title }: IHeaderCardProps) => {
    return (
        <h3 className="p-5 text-2xl">{title}</h3>
    );
}