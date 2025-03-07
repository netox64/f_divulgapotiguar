import {
    IFormAnuncio,
    IFormImovel,
    IFormInputCategoria,
    IFormInputPlano,
} from "@/components/Forms/types-forms";
import { Anuncio, Categoria, Imovel, Plano } from "./types-models";

const URL_FRONTEND: string = "http://localhost:3000/api";
const URL_BACKEND: string = "http://localhost:8080";

export class MessageError {
    private _message: string;

    constructor(message: string) {
        this._message = message;
    }
    public get message(): string {
        return this._message;
    }
    public set message(value: string) {
        this._message = value;
    }
    public static isMessageError(obj: unknown): obj is MessageError {
        return (
            typeof obj === "object" &&
            obj !== null &&
            obj instanceof MessageError
        );
    }
}

// Get all
export async function getAllResources<T>(endpoint: string): Promise<T[] | MessageError> {
    try {
        const response = await fetch(URL_FRONTEND + `/${endpoint}`);
        if (!response.ok) {
            return new MessageError(response.statusText);
        }
        const contentType = response.headers.get("Content-Type");
        if (!contentType?.includes("application/json")) {
            return new MessageError(
                "O servidor não conseguiu retornar uma resposta valida."
            );
        }
        const data = await response.json();
        return data;
    } catch (error: unknown) {
        return error instanceof Error
            ? new MessageError(error.message || "Unknown error occurred")
            : new MessageError("Unknown error occurred");
    }
}

// Get one

export async function getServerSideAnunciosForUsuarioProps(
    id: string
): Promise<Anuncio[] | MessageError> {
    try {
        const response = await fetch(URL_FRONTEND + `/usuarios/${id}/anuncios`);
        if (!response.ok) {
            return new MessageError(response.statusText);
        }
        const contentType = response.headers.get("Content-Type");
        if (!contentType?.includes("application/json")) {
            return new MessageError(
                "O servidor não conseguiu retornar uma resposta valida."
            );
        }
        return await response.json();
    } catch (error: unknown) {
        return error instanceof Error
            ? new MessageError(error.message || "Unknown error occurred")
            : new MessageError("Unknown error occurred");
    }
}
export async function getServerSideImoveisForUsuarioProps(
    id: string
): Promise<Imovel[] | MessageError> {
    try {
        const response = await fetch(URL_FRONTEND + `/usuarios/${id}/imoveis`, {
            method: "GET",
        });
        if (!response.ok) {
            return new MessageError(response.statusText);
        }
        const contentType = response.headers.get("Content-Type");
        if (!contentType?.includes("application/json")) {
            return new MessageError(
                "O servidor não conseguiu retornar uma resposta valida."
            );
        }
        return await response.json();
    } catch (error: unknown) {
        return error instanceof Error
            ? new MessageError(error.message || "Unknown error occurred")
            : new MessageError("Unknown error occurred");
    }
}
export async function getServerSidePlanosForUsuarioProps(
    id: string
): Promise<Plano[] | MessageError> {
    try {
        const response = await fetch(URL_FRONTEND + `/usuarios/${id}/planos`, {
            method: "GET",
        });
        if (!response.ok) {
            return new MessageError(response.statusText);
        }
        const contentType = response.headers.get("Content-Type");
        if (!contentType?.includes("application/json")) {
            return new MessageError(
                "O servidor não conseguiu retornar uma resposta valida."
            );
        }
        return await response.json();
    } catch (error: unknown) {
        return error instanceof Error
            ? new MessageError(error.message || "Unknown error occurred")
            : new MessageError("Unknown error occurred");
    }
}

// Posts - todos são realizados  em URL_FRONTEND para pegar token

export async function postImovel(
    data: IFormImovel
): Promise<Imovel | MessageError> {
    try {
        const response = await fetch(URL_FRONTEND + "/imoveis", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            return new MessageError(response.statusText);
        }
        const contentType = response.headers.get("Content-Type");
        if (!contentType?.includes("application/json")) {
            return new MessageError(
                "O servidor não conseguiu retornar uma resposta valida."
            );
        }
        return await response.json();
    } catch (error: unknown) {
        return error instanceof Error
            ? new MessageError(error.message || "Unknown error occurred")
            : new MessageError("Unknown error occurred");
    }
}
export async function postAnuncio(
    data: IFormAnuncio
): Promise<Anuncio | MessageError> {
    try {
        const response = await fetch(URL_FRONTEND + "/anuncios", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            return new MessageError(response.statusText);
        }
        const contentType = response.headers.get("Content-Type");
        if (!contentType?.includes("application/json")) {
            return new MessageError(
                "O servidor não conseguiu retornar uma resposta valida."
            );
        }
        return await response.json();
    } catch (error: unknown) {
        return error instanceof Error
            ? new MessageError(error.message || "Unknown error occurred")
            : new MessageError("Unknown error occurred");
    }
}
export async function postCategoria(
    data: IFormInputCategoria
): Promise<Categoria | MessageError> {
    try {
        const response = await fetch(URL_FRONTEND + "/categorias", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (response.status !== 201) {
            return new MessageError(response.statusText);
        }
        const contentType = response.headers.get("Content-Type");
        if (!contentType?.includes("application/json")) {
            return new MessageError(
                "O servidor não conseguiu retornar uma resposta valida."
            );
        }
        return await response.json();
    } catch (error: unknown) {
        return error instanceof Error
            ? new MessageError(error.message || "Unknown error occurred")
            : new MessageError("Unknown error occurred");
    }
}
export async function postPlano(
    data: IFormInputPlano
): Promise<Plano | MessageError> {
    try {
        const response = await fetch(URL_FRONTEND + "/planos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            return new MessageError(response.statusText);
        }
        const contentType = response.headers.get("Content-Type");
        if (!contentType?.includes("application/json")) {
            return new MessageError(
                "O servidor não conseguiu retornar uma resposta valida."
            );
        }
        return await response.json();
    } catch (error: unknown) {
        return error instanceof Error
            ? new MessageError(error.message || "Unknown error occurred")
            : new MessageError("Unknown error occurred");
    }
}

//Get By ID
export async function getPlanoById(
    planoId: number
): Promise<Plano | MessageError> {
    try {
        const response = await fetch(URL_FRONTEND + `/planos/${planoId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });
        if (!response.ok) {
            return new MessageError(response.statusText);
        }
        const contentType = response.headers.get("Content-Type");
        if (!contentType?.includes("application/json")) {
            return new MessageError(
                "O servidor não conseguiu retornar uma resposta valida."
            );
        }
        return await response.json();
    } catch (error: unknown) {
        return error instanceof Error
            ? new MessageError(error.message || "Unknown error occurred")
            : new MessageError("Unknown error occurred");
    }
}
export async function getAnuncioById(
    anuncioId: number
): Promise<Plano | MessageError> {
    try {
        const response = await fetch(URL_FRONTEND + `/anuncios/${anuncioId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });
        if (!response.ok) {
            return new MessageError(response.statusText);
        }
        const contentType = response.headers.get("Content-Type");
        if (!contentType?.includes("application/json")) {
            return new MessageError(
                "O servidor não conseguiu retornar uma resposta valida."
            );
        }
        return await response.json();
    } catch (error: unknown) {
        return error instanceof Error
            ? new MessageError(error.message || "Unknown error occurred")
            : new MessageError("Unknown error occurred");
    }
}

// Auth -- not use next services

// send email
export interface Response {
    statusCode: number;
    message: string;
}
export async function sendEmailServerSideProps(
    email: string
): Promise<Response> {
    try {
        const response = await fetch(URL_BACKEND + "/auth/sendEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email }),
        });
        if (response.ok) {
            return {
                statusCode: 200,
                message: "email enviado com sucesso.",
            } as Response;
        } else if (response.status === 404) {
            return {
                statusCode: 404,
                message: "esse email não esta cadastrado no sistema.",
            } as Response;
        }
        return {
            statusCode: 400,
            message: "formato de email incooreto.",
        } as Response;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return {
            statusCode: 500,
            message: "o servidor não esta responedo.",
        } as Response;
    }
}

// redem password
export interface IFormInputRedem {
    token: string;
    password: string;
    confirpassword: string;
}
export async function sendRedemServerSideProps(
    data: IFormInputRedem
): Promise<Response> {
    try {
        const response = await fetch(URL_BACKEND + "/auth/redefinir", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                // 'Authorization': 'Bearer seu_token_aqui'  // Se precisar de autenticação, descomente esta linha
            },
            body: JSON.stringify({
                token: data.token,
                password: data.password,
                rePassword: data.confirpassword,
            }),
        });

        if (response.ok) {
            return {
                statusCode: 200,
                message: "senha redefinida com sucesso.",
            } as Response;
        }

        return {
            statusCode: 404,
            message: "usuario não encontrado, ou token ivalido.",
        } as Response;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        // Erro de rede pode ocorrer nenhum status é retornado
        return {
            statusCode: 500,
            message: "o servidor deve estar fumando e não conseguiu respondeu.",
        } as Response;
    }
}

// register user
type FormRegister = {
    username: string;
    email: string;
    phone: string;
    cpf: string;
    password: string;
};
export interface IFormInput {
    name: string;
    email: string;
    telefone: string;
    cpf: string;
    password: string;
    repassword: string;
}
export async function registerUsuarioServerSideProps(
    data: IFormInput
): Promise<Response> {
    try {
        const response = await fetch(URL_BACKEND + "/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: data.name,
                email: data.email,
                phone: data.telefone,
                cpf: data.cpf,
                password: data.password,
            } as FormRegister),
        });

        if (response.status === 201) {
            return {
                statusCode: 201,
                message: "registrado com sucesso.",
            } as Response;
        }
        return {
            statusCode: 400,
            message:
                "Ese email ja existe na aplicação, prossiga para redefinição de senha..",
        } as Response;
    } catch {
        return {
            statusCode: 500,
            message: "o servidor deve estar fumando e não conseguiu respondeu.",
        } as Response;
    }
}

export interface qrcodeData {
    username: string;
    cpf: string;
    valorOriginal: string;
}
export async function reqQrCode(
    data: qrcodeData
): Promise<string | MessageError> {
    const response = await fetch(URL_FRONTEND + "/pagamentos/qrcode", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    if (response.ok) {
        const qrCodeUrl = await response.json();
        return qrCodeUrl.svg;
    } else {
        return new MessageError("svg do qrCode não pode ser gerado.");
    }
}
