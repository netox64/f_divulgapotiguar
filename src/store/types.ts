import { Anuncio, Categoria, Feedback, Imovel, Notificacao, Pagamento, Plano, Usuario } from "@/components/Forms/types-models";


export type GlobalStore = {

    usuarioLogado: Usuario;
    addToUsuarioLogado: (item: Usuario) => void;
    removeToUsuarioLogado: () => void;
    addImovelToUsuarioLogado: (imovel: Imovel) => void;
    addAnuncioToUsuarioLogado: (anuncio: Anuncio) => void;
    addFeedbackToUsuarioLogado: (feedback: Feedback) => void;
    addPlanoToUsuarioLogado: (plano: Plano) => void;
    addNotificacaoToUsuarioLogado: (notificacao: Notificacao) => void;

    planoComprado: Plano;
    addToPlanoComprado: (item: Plano) => void;
    removeToPlanoComprado: () => void;

    imoveis: Imovel[];// => state
    initStateImoveis: (list: Imovel[]) => void; //  => dispatchs
    addToImoveis: (item: Imovel) => void;
    removeToImoveis: (id: number) => void;

    anuncios: Anuncio[];// => state
    initStateAnuncios: (list: Anuncio[]) => void; //  => dispatchs
    addToAnuncios: (item: Anuncio) => void;
    removeToAnuncios: (id: number) => void;

    categorias: Categoria[];// => state
    initStateCategorias: (list: Categoria[]) => void; //  => dispatchs
    addToCategorias: (item: Categoria) => void;
    removeToCategorias: (id: number) => void;

    usuarios: Usuario[];// => state
    initStateUsuarios: (list: Usuario[]) => void; //  => dispatchs
    addToUsuarios: (item: Usuario) => void;
    removeToUsuarios: (id: string) => void;

    planos: Plano[];// => state
    initStatePlanos: (list: Plano[]) => void; //  => dispatchs
    addToPlanos: (item: Plano) => void;
    removeToPlanos: (id: number) => void;

    pagamentos: Pagamento[];// => state
    initStatePagamentos: (list: Pagamento[]) => void; //  => dispatchs
    addToPagamentos: (item: Pagamento) => void;
    removeToPagamentos: (id: number) => void;

    notificacoes: Notificacao[];// => state
    initStateNotificacoes: (list: Notificacao[]) => void; //  => dispatchs
    addToNotificacoes: (item: Notificacao) => void;
    removeToNotificacoes: (id: number) => void;

    feedbacks: Feedback[];// => state
    initStateFeedbacks: (list: Feedback[]) => void; //  => dispatchs
    addToFeedbacks: (item: Feedback) => void;
    removeToFeedbacks: (id: number) => void;
}
