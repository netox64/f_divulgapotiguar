import { create } from 'zustand';
import { GlobalStore } from './types';
import { Plano, Usuario, Anuncio, Categoria, Feedback, Imovel, Notificacao, Pagamento } from "@/components/Forms/types-models";

export const useGlobalStore = create<GlobalStore>((set) => {
    const usuarioLogado = {} as Usuario;
    const planoComprado = {} as Plano;

    return {

        // For usuario Logado
        usuarioLogado,
        addToUsuarioLogado: (usuario: Usuario) => set(() => ({ usuarioLogado: usuario })),
        removeToUsuarioLogado: () => set(() => ({ usuarioLogado: {} as Usuario })),
        addImovelToUsuarioLogado: (imovel: Imovel) => set((state) => ({ usuarioLogado: { ...state.usuarioLogado, imoveis: [...(state.usuarioLogado.imoveis || []), imovel], }, })),
        addAnuncioToUsuarioLogado: (anuncio: Anuncio) => set((state) => ({ usuarioLogado: { ...state.usuarioLogado, anuncios: [...(state.usuarioLogado.anuncios || []), anuncio], }, })),
        addFeedbackToUsuarioLogado: (feedback: Feedback) => set((state) => ({ usuarioLogado: { ...state.usuarioLogado, feedbacks: [...(state.usuarioLogado.feedbacks || []), feedback], }, })),
        addPlanoToUsuarioLogado: (plano: Plano) => set((state) => ({ usuarioLogado: { ...state.usuarioLogado, planos: [...(state.usuarioLogado.planos || []), plano], }, })),
        addNotificacaoToUsuarioLogado: (notificacao: Notificacao) => set((state) => ({ usuarioLogado: { ...state.usuarioLogado, notificacoes: [...(state.usuarioLogado.notificacoes || []), notificacao], }, })),

        // For plano comprado
        planoComprado,
        addToPlanoComprado: (plano: Plano) => set(() => ({ planoComprado: plano })),
        removeToPlanoComprado: () => set(() => ({ planoComprado: {} as Plano })),

        // For Imoveis
        imoveis: [],
        initStateImoveis: (list: Imovel[]) => set(() => ({ imoveis: [...list] })),
        addToImoveis: (item: Imovel) => set((state) => ({ imoveis: [...state.imoveis, item] })),
        removeToImoveis: (id: number) => set((state) => ({ imoveis: state.imoveis.filter((item) => item.imovelId !== id) })),

        // For Anuncios
        anuncios: [],
        initStateAnuncios: (list: Anuncio[]) => set(() => ({ anuncios: [...list] })),
        addToAnuncios: (item: Anuncio) => set((state) => ({ anuncios: [...state.anuncios, item] })),
        removeToAnuncios: (id: number) => set((state) => ({ anuncios: state.anuncios.filter((item) => item.anuncioId !== id) })),

        // For Categoria
        categorias: [],
        initStateCategorias: (list: Categoria[]) => set(() => ({ categorias: [...list] })),
        addToCategorias: (item: Categoria) => set((state) => ({ categorias: [...state.categorias, item] })),
        removeToCategorias: (id: number) => set((state) => ({ categorias: state.categorias.filter((item) => item.categoriaId !== id) })),

        // For Usuario
        usuarios: [],
        initStateUsuarios: (list: Usuario[]) => set(() => ({ usuarios: [...list] })),
        addToUsuarios: (item: Usuario) => set((state) => ({ usuarios: [...state.usuarios, item] })),
        removeToUsuarios: (id: string) => set((state) => ({ usuarios: state.usuarios.filter((item) => item.usuarioId !== id) })),

        // For Plano
        planos: [],
        initStatePlanos: (list: Plano[]) => set(() => ({ planos: [...list] })),
        addToPlanos: (item: Plano) => set((state) => ({ planos: [...state.planos, item] })),
        removeToPlanos: (id: number) => set((state) => ({ planos: state.planos.filter((item) => item.planoId !== id) })),

        // For Pagamento
        pagamentos: [],
        initStatePagamentos: (list: Pagamento[]) => set(() => ({ pagamentos: [...list] })),
        addToPagamentos: (item: Pagamento) => set((state) => ({ pagamentos: [...state.pagamentos, item] })),
        removeToPagamentos: (id: number) => set((state) => ({ pagamentos: state.pagamentos.filter((item) => item.pagamentoId !== id) })),

        // For Notificacao
        notificacoes: [],
        initStateNotificacoes: (list: Notificacao[]) => set(() => ({ notificacoes: [...list] })),
        addToNotificacoes: (item: Notificacao) => set((state) => ({ notificacoes: [...state.notificacoes, item] })),
        removeToNotificacoes: (id: number) => set((state) => ({ notificacoes: state.notificacoes.filter((item) => item.notificacaoId !== id) })),

        // For Feedback
        feedbacks: [],
        initStateFeedbacks: (list: Feedback[]) => set(() => ({ feedbacks: [...list] })),
        addToFeedbacks: (item: Feedback) => set((state) => ({ feedbacks: [...state.feedbacks, item] })),
        removeToFeedbacks: (id: number) => set((state) => ({ feedbacks: state.feedbacks.filter((item) => item.feedbackId !== id) })),

    }
});
