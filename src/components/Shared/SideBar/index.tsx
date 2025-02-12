import { Avatar, Logout, SideLink } from "@/components/Atons";

export interface ISideBarProps { username: string; img: string; }
export const SideBar: React.FC<ISideBarProps> = ({ username, img }) => {
    const arrayDestino = ["profile", "manager", "adquiridos", "analisar", "anuncios", "categorias", "imoveis", "planos", "usuarios"];
    const arrayAdminRoutes = ["/admin", "/usuarios", "/categorias", "/dashboard/admin", "/analisar", "/config/admin"];
    const rotas = arrayAdminRoutes.flatMap(route => route.split('/').filter(Boolean));


    return (
        <div className="w-full flex flex-col items-center justify-center bg-[#1f99dd] rounded-2xl" data-testid="sidebar">
            <Avatar img={img}/>
            {arrayDestino.map((item: string) => (
                <div className="w-full" key={item}>
                    <SideLink destination={item} isRouteAdmin={rotas.includes(item)} />
                </div>
            ))}
            <Logout />
        </div>
    );
}