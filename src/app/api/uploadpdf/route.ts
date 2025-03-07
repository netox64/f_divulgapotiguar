import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const URL_BASE = "http://localhost:8080";

export async function POST(req: NextRequest): Promise<NextResponse> {
    const cookieStore = cookies();
    const token = (await cookieStore).get('jwt_back');
    const jwt = !token ? "not found" : token.value;

    try {
        const formData = await req.formData();
        const fileBlob = formData.get("file") as Blob | null;
        const imovelId = Number(formData.get("imovelId"));

        if (!fileBlob || !imovelId) {
            return NextResponse.json({ message: "Arquivo ou ID do imóvel ausente." }, { status: 400 });
        }

        const file = new File([fileBlob], "upload.pdf", { type: fileBlob.type });
        const form = new FormData();
        form.append("file", file);

        const response = await fetch(URL_BASE + `/imoveis/${imovelId}/uploadPdf`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
            body: form,
        });
        if (response.ok) {
            return NextResponse.json("submit sucess", { status: 200 });
        }
        return NextResponse.json({ message: 'The request contains errors, such as invalid data, improper format, or missing required fields.' }, { status: 400 });

    } catch {
        return NextResponse.json({ message: "Something went wrong, try turning on the backend server at least bixo" }, { status: 500 });
    }
}