import * as yup from 'yup';

export const formSchema = yup.object().shape({
  nome: yup.string().required('O título do anúncio é obrigatório').min(3, 'O título deve ter pelo menos 3 caracteres'),
  valor: yup.number().required('O valor é obrigatório e deve ser positivo').positive('O valor deve ser positivo'),
  quantAnuncio: yup.number().required('A quantidade de anúncios é obrigatória e deve ser positiva').positive('A quantidade de anúncios deve ser positiva'),
  duracao: yup.number().required('A duração é obrigatória e deve ser entre 1 e 365').min(1, 'A duração deve ser pelo menos 1').max(365, 'A duração não pode ser maior que 365'),
  adquirido: yup.boolean().required('O campo deve ser verdadeiro ou falso'),
  usuarioId: yup.string().required('O usuário é obrigatório').min(30, 'O id do usuario deve ter pelo menos 30 caracteres'),
});
//nome:string; valor: number; quantAnuncio: number; duracao: number; usuarioId: string;
export type FormSchemaType = yup.InferType<typeof formSchema>;
