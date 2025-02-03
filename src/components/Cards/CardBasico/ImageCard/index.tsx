import Image from "next/image";

export interface IImageProps {
    imagem?: string;
}

export const ImageCard = ({ imagem }:IImageProps) => {
    return (
        <Image src={imagem ?`/imgs/${imagem}` : `/imgs/imgs_default.svg`} alt="imagem" width={100} height={150} />
    );
}