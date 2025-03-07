import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const URL_BASE: string = "http://localhost:8080";

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        const body = await req.json();

        const cookieStore = cookies();
        const token = (await cookieStore).get('jwt_back');
        const jwt = !token ? "not found" : token.value;

        const response = await fetch(URL_BASE + "/categorias", {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json") && response.status === 201) {
            const categoria = await response.json();
            return NextResponse.json(categoria, { status: 201 });
        }
        return NextResponse.json({ message: "The request contains errors, such as invalid data, incorrect format, or missing required fields." }, { status: 400 });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong, check if you turned on the backend server at least bixo." }, { status: 500 });
    }
}