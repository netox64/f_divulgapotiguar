import Canivete from "@/components/Utils/canivete";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const URL_BASE: string = "http://localhost:8080";

export async function GET(req: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse> {
    const reqParams = await params;
    const { id } = reqParams;

    if (!Canivete.isString(id) || id.trim() === '') {
        return NextResponse.json({ message: 'Invalid ID. ID must be a non-empty string.' }, { status: 400 });
    }

    try {
        const cookieStore = cookies();
        const token = (await cookieStore).get('jwt_back');
        let jwt = !token ? "not found" : token.value;

        const response = await fetch(URL_BASE + `/usuarios/${id}/planos`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
            },
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