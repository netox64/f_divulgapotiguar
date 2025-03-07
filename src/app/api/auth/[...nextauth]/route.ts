import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { IAuthenticateUser, requestAuthenticationUser } from "../../requests-api";
import { cookies } from "next/headers";
import { decoderTokenToClaims } from "../../decode-claims";

type User = { id: string; name?: string | null; email?: string | null; image?: string; role?: string | string[] | null; };

const handler = NextAuth({
    pages: {
        signIn: "/login",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "example@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req): Promise<User | null> {
                const user: IAuthenticateUser = { email: credentials?.email, password: credentials?.password };
                const resposta = await requestAuthenticationUser(user);
                
                if (resposta.token && resposta.token !== "User with credentials not found or invalid") {
                    (await cookies()).set("jwt_back", resposta.token, {
                        httpOnly: true,
                        sameSite: "lax",
                        path: "/",
                        maxAge: 3600
                    });
                    const decodedClaims = decoderTokenToClaims(resposta.token);

                    return {
                        id: "",
                        name: decodedClaims?.Name,
                        email: decodedClaims?.Email,
                        image: decodedClaims?.Image,
                        role: decodedClaims?.Role
                    }
                }
                return null;
            }
        })
    ],
})
export { handler as GET, handler as POST }