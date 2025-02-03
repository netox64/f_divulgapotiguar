import Image from "next/image";

export const Logo = () => {
    return (
        <div className="max-w-[30%] w-[150px] h-[80px] rounded-[15px] p-[5px] flex justify-center items-center overflow-hidden" data-testid="logo" >
            <Image className="object-cover" src={"/imgs/logo.png"} alt={"logo do site"} width={150} height={80} loading="lazy" />
        </div>
    );
};
