import Image from "next/image";

export interface IAvatarProps { img?: string; };

export const Avatar: React.FC<IAvatarProps> = ({ img }) => {
    return (
        <div className="w-full h-32 flex items-center justify-center my-7" data-testid="container-avatar">
            <div className="flex items-center justify-center p-5 rounded-full bg-white mx-3">
                <Image src={img ? `/imgs/${img}` : `/imgs/avatar.svg`} width={92} height={92} alt={`imagem do seu avatar do site`} priority data-testid="img-avatar" />
            </div>
        </div>
    );
}