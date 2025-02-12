import Image from "next/image";

export interface IAvatarProps { img?: string; };

export const Avatar: React.FC<IAvatarProps> = ({ img }) => {

    return (
        <div className="w-full h-32 flex items-center justify-center my-7" data-testid="container-avatar">
            <div className="w-[92px] h-[92px] relative rounded-full overflow-hidden bg-white">
                <Image src={img && img !== "avatar.svg" ? `/uploads/profiles/${img}` : `/imgs/avatar.svg`} alt="imagem do seu avatar do site" priority fill className="object-cover" data-testid="img-avatar" />
            </div>
        </div>
    );
}