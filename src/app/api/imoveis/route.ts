import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const URL_BASE = "http://localhost:8080/imoveis";

export async function GET(req: NextRequest): Promise<NextResponse> {
    const cookieStore = cookies();
    const token = (await cookieStore).get('jwt_back');
    let jwt = !token ? "not found" : token.value;
    try {
        const response = await fetch(URL_BASE, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            return NextResponse.json(data, { status: 200 });
        }
        return NextResponse.json({ message: 'The request contains errors, such as invalid data, improper format, or missing required fields.' }, { status: 400 });

    } catch (error) {
        return NextResponse.json({ message: "Something went wrong, try turning on the backend server at least bixo" }, { status: 500 });
    }
}

export async function POST(req: Request): Promise<NextResponse> {
    try {
        const body = await req.json();
        const cookieStore = cookies();
        const token = (await cookieStore).get('jwt_back');
        let jwt = !token ? "not found" : token.value;

        const response = await fetch(URL_BASE, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json") && response.status === 201) {
            const imovel = await response.json();
            return NextResponse.json(imovel, { status: 201 });
        }
        return NextResponse.json({ message: "The request contains errors, such as invalid data, incorrect format, or missing required fields." }, { status: 400 });

    } catch (error) {
        return NextResponse.json({ message: "Something went wrong, check if you turned on the backend server at least bixo." }, { status: 500 });
    }
}