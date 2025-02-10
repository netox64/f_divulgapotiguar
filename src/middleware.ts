import { NextRequest, NextResponse } from "next/server";
import { decoderTokenToClaims } from "@/app/api/decode-claims";

// Lista de rotas que apenas ADMIN pode acessar
const adminRoutes = ["/admin", "/usuarios", "/categorias", "/dashboard/admin", "/analisar", "/planos/new", "/config/admin"];

// Então vamos aplicar o middleware apenas nas rotas necessárias, que são rotas de admin e ou filhas
export const config = {
    matcher: ["/admin/:path*", "/usuarios/:path*", "/categorias/:path*", "/planos/new", "/dashboard/admin/:path*", "/config/admin/:path*", "/analisar"],
};

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    console.log(`Middleware ativado para: ${path}`);

    // Verifica se a rota está na lista de adminRoutes
    const isAdminRoute = adminRoutes.some(route => path.startsWith(route));
    const token = request.cookies.get("jwt_back")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/manager?error=not_has_token", request.url));
    }

    const claims = decoderTokenToClaims(token);
    if (!claims) {
        return NextResponse.redirect(new URL("/manager?error=invalid_token", request.url));
    }

    // Verifica se o usuário tem a role ADMIN para acessar rotas protegidas
    const userRoles = Array.isArray(claims.Role) ? claims.Role : claims.Role ? [claims.Role] : [];
    const isAdmin = userRoles.some(role => role.includes("ADMIN"));

    if (isAdminRoute && !isAdmin) {
        return NextResponse.redirect(new URL("/manager?error=invalid_role", request.url));
    }
    return NextResponse.next();
}
