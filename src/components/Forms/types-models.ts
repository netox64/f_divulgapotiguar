type UserRole = "ADMIN" | "USER";
type Status = "ANUNCIADO" | "PENDENTE" | "SEGUIU_PARA_ANALISE" | "ANALISADO" | "INVALIDO";
type Usuario = {
    usuarioId: string, username: string, image: string, phone: string, totalStars: number, cpf: string, email: string, password: string, role: UserRole,
    token: string, createdAt: Date, notificacoes: Notificacao[], feedbacks: Feedback[], planos: Plano[], imoveis: Imovel[], anuncios: Anuncio[], authorities: [{ authority: string }], accountNonExpired: true, accountNonLocked: true, credentialsNonExpired: true, enabled: true
};
type Plano = { planoId: number, nome: string, valor: number, quantAnuncio: number, duracao: number, adquirido: boolean, dataValidade: Date, dataAdquerido: Date, pagamento: Pagamento };

type Pagamento = { pagamentoId: number, numComprovante: number, tipo: string, cartao: string, chavePix: string, valor: number, planos: Plano[] };

type Notificacao = { notificacaoId: number, assunto: string, descricao: string, dataEnvio: Date, status: string, usuario: string };

type Imovel = {
    imovelId: number, nome: string, localizacao: string, areaCalculada: number, comprimento: number, largura: number, imagemImovel: string, tipo: string, sobre: string, status: Status, usuario: string, isAnunciado: boolean
};

type Categoria = { categoriaId: number, nome: string, descricao: string, anuncios: Anuncio[] };

type Anuncio = {
    anuncioId: number, title: string, descricao: string, imagemPropaganda: string, tipoPagamento: string, stars: number,
    preco: number, dataAnuncio: Date, imovel: Imovel, categorias: Categoria[], feedbacks: Feedback[]
};

type Feedback = { feedbackId: number, stars: number, comentario: string, remetenteUsername: string, anuncio: string };
type Avalicacao = { quantVerificacao: number, quantAcerto: number, indiceConfiabilidade: number }

export type { Usuario, UserRole, Status, Plano, Pagamento, Notificacao, Imovel, Categoria, Anuncio, Feedback, Avalicacao };