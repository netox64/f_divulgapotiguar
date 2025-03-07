import { NextRequest, NextResponse } from 'next/server';
import formidable, { Fields, Files } from 'formidable';
import fs from 'fs';
import path from 'path';
import { IncomingMessage } from 'http';
import { Readable } from 'stream';

export const config = { api: { bodyParser: false } };

async function* toAsyncIterable(stream: ReadableStream<Uint8Array>) {
    const reader = stream.getReader();
    try {
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            yield value;
        }
    } finally {
        reader.releaseLock();
    }
}

function toNodeRequest(req: NextRequest): IncomingMessage {
    const asyncIterable = req.body ? toAsyncIterable(req.body) : [];
    const readable = Readable.from(asyncIterable);
    const nodeRequest = Object.assign(readable, {
        headers: Object.fromEntries(req.headers.entries()),
        method: req.method,
        url: req.url,
    });
    return nodeRequest as IncomingMessage;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'imoveis');

    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }

    const form = formidable({ uploadDir, keepExtensions: true });

    const nodeReq = toNodeRequest(req);

    return new Promise((resolve) => {
        form.parse(nodeReq, (err, fields: Fields, files: Files) => {
            if (err) {
                resolve(NextResponse.json({ message: 'Erro ao processar o arquivo.' }, { status: 500 }));
                return;
            }

            const file = Array.isArray(files.file) ? files.file[0] : files.file;
            const filePath = file?.filepath;
            resolve(NextResponse.json({ message: 'Arquivo enviado com sucesso!', filePath }, { status: 201 }));
        });
    });
}
