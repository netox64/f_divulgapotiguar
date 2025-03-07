import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { URL_BASE } from "../url";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse> {
    const reqParams = await params;
    const id = Number(reqParams.id);

    const cookieStore = cookies();
    const token = (await cookieStore).get('jwt_back');
    let jwt = !token ? "not found" : token.value;

    try {
        const body = await req.json();
        const response = await fetch(`${URL_BASE}/${id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json") && response.ok) {
            const data = await response.json();
            return NextResponse.json(data, { status: 200 });
        }

        return NextResponse.json({ message: 'The request contains errors, such as invalid data, improper format, or missing required fields.' }, { status: 400 });

    } catch (error) {
        return NextResponse.json({ message: "Something went wrong, try turning on the backend server at least bixo" }, { status: 500 });
    }
}