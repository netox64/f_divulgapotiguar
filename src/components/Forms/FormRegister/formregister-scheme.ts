import * as yup from 'yup';

export const formSchema = yup.object().shape({
  name: yup.string().required('O nome de usuário é obrigatório').min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: yup.string().required('O email é obrigatório').email('Digite um email válido'),
  telefone: yup.string().required('O telefone é obrigatório').matches(/^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/, 'Formato de telefone inválido. Exemplo: (11) 91234-5678'),
  cpf: yup.string().required('O CPF é obrigatório').matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'Formato de CPF inválido. Exemplo: 123.456.789-00'),
  password: yup.string().required('A senha é obrigatória').min(6, 'A senha deve ter pelo menos 6 caracteres'),
  repassword: yup.string().required('A confirmação de senha é obrigatória').oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
});

export type FormSchemaType = yup.InferType<typeof formSchema>;
