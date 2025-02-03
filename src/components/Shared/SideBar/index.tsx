import { Avatar, Logout, SideLink } from "@/components/Atons";

export interface ISideBarProps { }
export const SideBar: React.FC<ISideBarProps> = () => {
    const arrayDestino = ["profile", "adquiridos", "anuncios","categorias","manager", "planos", "imoveis","usuarios"];
    return (
        <div className="w-full flex flex-col items-center justify-center bg-[#1f99dd] rounded-2xl" data-testid="sidebar">
            <Avatar />
            {arrayDestino.map((item: string) => (
                <div className="w-full" key={item}>
                    <SideLink destination={item} />
                </div>
            ))}
            <Logout />
        </div>
    );
}