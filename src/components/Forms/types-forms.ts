interface IFormImovel { nome: string, localizacao: string, comprimento: number, largura: number, imagem: string, tipo: string, sobre: string, usuarioId: string; };
interface IFormAnuncio {
    imovelId: number; planoId: number; categoriasIds?: (number | undefined)[] | null | undefined; title: string; descricao: string;
    imagemPropaganda: string; tipoPagamento: string; preco: number; usuarioId: string
};
interface IFormInputPlano { nome: string; valor: number; quantAnuncio: number; duracao: number; adquirido: boolean; usuarioId: string; };


//canot have relatioship with usuario, not use usuarioId: string;
interface IFormInputCategoria { nome: string; descricao: string; };
interface IFormRegister { username: string; email: string; phone: string; cpf: string; password: string; }



//form updates
interface IUsuarioUpdate {
    username?: string | undefined, iamge?: string, phone?: string | undefined, password: string, role?: string | undefined, token?: string | undefined,
    notificacoes?: (number | undefined)[] | null | undefined, planos?: (number | undefined)[] | null | undefined
};
interface IFormAnuncioUpdate {
    imovelId: number; planoId: number; categoriasIds?: (number | undefined)[] | null | undefined; title?: string; descricao?: string;
    imagemPropaganda?: string; tipoPagamento?: string; stars?: number; preco?: number; usuarioId: string
};

export type { IFormImovel, IFormAnuncio, IFormInputCategoria, IFormInputPlano, IFormRegister, IUsuarioUpdate };