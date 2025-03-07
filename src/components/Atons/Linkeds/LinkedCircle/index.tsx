import Image from "next/image";
import Link from "next/link";

interface ILinkedCircleProps { endereco: string; imagem?: string; }

export const LinkedCircle: React.FC<ILinkedCircleProps> = ({ endereco, imagem }) => {
    return (
        <Link href={endereco} className={"bg-gray-300 p-2 mx-5 rounded-full"} target={"_blank"} data-testid="linked-circle" >
            <Image src={imagem ? `/imgs/${imagem}` : "/imgs/imgs_default.svg"} alt="link para rede social" width={50} height={50} data-testid="img-link-circle" />
        </Link>
    );
};
