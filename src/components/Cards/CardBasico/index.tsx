import { HeaderCard } from "./HeaderCard";
import { ImageCard } from "./ImageCard";
import { BodyCard } from "./BodyCard";

export interface ICardBasicoProps { title: string; imagem: string; usuario: string; dataAnuncio: Date; descricao: string;};

export const CardBasico = ({ title, imagem, usuario, dataAnuncio, descricao }: ICardBasicoProps) => {
    return (
        <div className={`container bg-slate-100 max-w-72 m-5 h-auto flex flex-col items-center justify-center border border-gray-300 rounded-lg`}>
            <HeaderCard title={title} />
            <ImageCard imagem={imagem} />
            <BodyCard usuario={usuario} dataAnuncio={dataAnuncio} descricao={descricao} />
        </div>
    );
}