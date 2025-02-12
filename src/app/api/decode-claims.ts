import { jwtDecode } from 'jwt-decode';

export interface IObjectClaims {
    Name: string; Image: string; Email: string; Role: string | string[]; // roles podem ser um único valor ou uma array
}

export const decoderTokenToClaims = (token: string): Partial<IObjectClaims> | null => {
    if (token) {
        try {
            const decodedToken = jwtDecode(token) as any;
            // Acesse as claims
            const userRoles = decodedToken.Role;
            return { Name: decodedToken.Name, Image: decodedToken.Image, Email: decodedToken.Email, Role: decodedToken.Role };
        } catch (error) {
            console.error('Erro ao decodificar o token:', error);
            return null;
        }
    } else {
        console.log('Token não encontrado foda-se');
        return null;
    }
}