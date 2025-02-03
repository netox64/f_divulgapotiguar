import { NextRequest, NextResponse } from "next/server";
import { decoderTokenToClaims } from "@/app/api/decode-claims";

// Lista de rotas que apenas ADMIN pode acessar
const adminRoutes = ["/admin", "/usuarios", "/dashboard/admin", "/config/admin"];

// Então vamos aplicar o middleware apenas nas rotas necessárias, que são adminRoutes e filhas
export const config = {
    matcher: [
        "/admin/:path*",
        "/usuarios/:path*",
        "/dashboard/admin/:path*",
        "/config/admin/:path*"
    ],
};

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    console.log(`Middleware ativado para: ${path}`);

    // Verifica se a rota está na lista de adminRoutes
    const isAdminRoute = adminRoutes.some(route => path.startsWith(route));
    const token = request.cookies.get("jwt_back")?.value;

    if (!token) {
        console.log("Nenhum token encontrado.");
        return NextResponse.redirect(new URL("/manager", request.url));
    }

    const claims = decoderTokenToClaims(token);

    if (!claims) {
        console.log("Token inválido ou expirado.");
        return NextResponse.redirect(new URL("/manager", request.url));
    }

    //console.log(`🔑 Token válido: ${JSON.stringify(claims)}`);
    // Verifica se o usuário tem a role ADMIN para acessar rotas protegidas
    const userRoles = Array.isArray(claims.Role) ? claims.Role : claims.Role ? [claims.Role] : [];
    const isAdmin = userRoles.some(role => role.includes("ADMIN"));

    if (isAdminRoute && !isAdmin) {
        console.log("Acesso negado. Usuário sem permissão.");
        return NextResponse.redirect(new URL("/manager", request.url));
    }
    return NextResponse.next();
}
