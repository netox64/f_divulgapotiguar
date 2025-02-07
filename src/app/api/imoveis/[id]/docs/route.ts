import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { URL_BASE } from "../../url";

export async function GET(req: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse> {
    const reqParams = await params;
    const imovelId = Number(reqParams.id);

    const cookieStore = cookies();
    const token = (await cookieStore).get('jwt_back');
    let jwt = !token ? "not found" : token.value;

    try {
        const response = await fetch(URL_BASE + `/${imovelId}/pdf`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        if (response.ok) {
            const pdfArquivo = await response.blob();
            return new NextResponse(pdfArquivo, { status: 200, headers: { 'Content-Type': 'application/pdf', 'Content-Disposition': 'inline', } });
        }

        return NextResponse.json({ message: 'The request contains errors, such as invalid data or missing fields.' }, { status: 400 });

    } catch (error) {
        return NextResponse.json({ message: "Something went wrong, try turning on the backend server" }, { status: 500 });
    }
}
