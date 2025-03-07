import * as yup from 'yup';

export const formSchema = yup.object().shape({
    title: yup.string().required('O título do anúncio é obrigatório').min(3, 'O título deve ter pelo menos 3 caracteres'),
    descricao: yup.string().required('A descrição é obrigatória').min(10, 'A descrição deve ter pelo menos 10 caracteres'),
    imagemPropaganda: yup.string().required('A imagem de propaganda é obrigatória').min(10, 'A descrição deve ter pelo menos 10 caracteres'),
    tipoPagamento: yup.string().required('O tipo de pagamento é obrigatório').oneOf(['boleto', 'cartão', 'pix'], 'Tipo de pagamento inválido. Opções: boleto, cartão, pix'),
    preco: yup.number().required('O preço é obrigatório').positive('O preço deve ser um valor positivo').min(0.01, 'O preço deve ser no mínimo R$ 0,01'),
    imovelId: yup.number().required('O ID do imóvel é obrigatório').integer('O ID do imóvel deve ser um número inteiro').positive('O ID do imóvel deve ser um número positivo'),
    planoId: yup.number().required('O ID do plano é obrigatório').integer('O ID do plano deve ser um número inteiro').positive('O ID do plano deve ser um número positivo'),
    categoriasIds: yup.array().of(yup.number().positive('Cada ID de categoria deve ser um número positivo')).notRequired(),
    usuarioId: yup.string().required('O sobre de usuário é obrigatório').min(10, 'O sobre deve ter pelo menos 10 caracteres'),
});

export type FormSchemaType = yup.InferType<typeof formSchema>;