import { NextRequest, NextResponse } from "next/server";
import Canivete from "@/components/Utils/canivete";
import { cookies } from "next/headers";

const URL_BACKEND: string = "http://localhost:8080";

export async function GET(req: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse> {
    
    const reqParams = await params;
    const planoId = Number(reqParams.id);
    
    if (!Canivete.isNumber(planoId)) { return NextResponse.json({ message: 'Invalid ID. Not is a number.' }, { status: 400 }); }

    const cook = await cookies();
    const token = cook.get('token')?.value;

    try {
        const response = await fetch(URL_BACKEND + `/planos/${planoId}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
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