import * as yup from 'yup';

export const formSchema = yup.object().shape({
  nome: yup.string().required('O nome do imovel obrigatório').min(10, 'O nome deve ter pelo menos 10 caracteres'),
  localizacao: yup.string().required('A localização é obrigatório').min(10, 'A localização deve ter pelo menos 10 caracteres'),
  comprimento: yup.number().required('O comprimrnto é obrigatorio').min(1.0, 'O comprimento deve ser maior que 1.0'),
  largura: yup.number().required('A largura é obrigatoria').min(1.0, 'A largura deve ser maior que 1.0'),
  imagem: yup.string().required('A imagem é obrigatório').min(10, 'A imagem deve ter pelo menos 10 caracteres'),
  tipo: yup.string().required('O tipo de de imovel é obrigatório').min(10, 'O tipo deve ter pelo menos 10 caracteres'),
  sobre: yup.string().required('Uma infortmação sobre o imovel é obrigatório').min(10, 'O sobre deve ter pelo menos 10 caracteres'),
  usuarioId: yup.string().required('O id do usuário é obrigatório').min(10, 'O id do usuario deve ter pelo menos 10 caracteres'),
});

export type FormSchemaType = yup.InferType<typeof formSchema>;
