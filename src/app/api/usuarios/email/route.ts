import { cookies } from "next/headers";
import { decoderTokenToClaims } from "../../decode-claims";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {

    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('jwt_back');
        let jwt = !token ? "not found" : token.value;

        // pega email do usuario contido no token
        let emailUsuario = "";
        const decodedClaims = decoderTokenToClaims(jwt);
        if (decodedClaims && decodedClaims.Email) {
            emailUsuario = decodedClaims.Email;
        }

        //faz requisição pelo usuario
        const response = await fetch("http://localhost:8080/usuarios/email", {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: emailUsuario }),
        });

        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json") && response.ok) {
            const data = await response.json();
            return NextResponse.json({ ...data }, { status: 200 });
        }
        return NextResponse.json({ message: "Not found" }, { status: 404 });
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong, try turning on the backend server at least bixo" }, { status: 500 });
    }
}