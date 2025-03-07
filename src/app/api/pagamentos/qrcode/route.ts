import { qrcodeData } from "@/components/Forms/functions-request";
import Canivete from "@/components/Utils/canivete";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const URL_BASE: string = "http://localhost:8080";

export async function POST(req: NextRequest) {
    const cookieStore = cookies();
    const token = (await cookieStore).get('jwt_back');
    let jwt = !token ? "not found" : token.value;

    try {
        const data: qrcodeData = await req.json();
        const dataValida: qrcodeData = { username: data.username, cpf: Canivete.removeMaskFromCpf(data.cpf), valorOriginal: Canivete.formatDecimal(data.valorOriginal) }

        const response = await fetch(URL_BASE + "/pagamentos/mockqrcode", {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataValida)
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