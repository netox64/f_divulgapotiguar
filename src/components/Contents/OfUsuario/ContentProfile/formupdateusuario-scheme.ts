import * as yup from 'yup';

export const formSchema = yup.object().shape({
    phone: yup.string().min(3, 'O phone deve ter pelo menos 3 caracteres'),
    password: yup.string().required('A senha é obrigatória').min(6, 'A senha deve ter pelo menos 6 caracteres'),
    role: yup.string(),
    token: yup.string(),
    notificacoes: yup.array().of(yup.number().positive('Cada ID de notificação deve ser um número positivo')).notRequired(),
    planos: yup.array().of(yup.number().positive('Cada ID de planos deve ser um número positivo')).notRequired(),
});

export type FormSchemaType = yup.InferType<typeof formSchema>;