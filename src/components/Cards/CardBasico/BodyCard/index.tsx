interface IBodyCardProps {
    usuario: string;
    descricao: string;
    dataAnuncio: Date;
}

export const BodyCard = ({ descricao, usuario, dataAnuncio }: IBodyCardProps) => {
    return (
        <div className="container p-5 flex flex-col items-center justify-center">
            <div className="flex flex-row">
                <div className="w-full text-sm font-bold">{usuario}</div>
                <div className="w-full text-sm"> em: </div>
                <div className="w-full text-sm">{dataAnuncio.toLocaleDateString()}</div>
            </div>
            <div className="">{descricao}</div>
        </div>
    );
}