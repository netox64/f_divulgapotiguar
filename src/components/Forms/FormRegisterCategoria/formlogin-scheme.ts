import * as yup from 'yup';

export const formSchema = yup.object().shape({
  nome: yup.string().required('O título do anúncio é obrigatório').min(3, 'O título deve ter pelo menos 3 caracteres'),
  descricao: yup.string().required('A descrição é obrigatória').min(10, 'A descrição deve ter pelo menos 10 caracteres'),
});

export type FormSchemaType = yup.InferType<typeof formSchema>;
