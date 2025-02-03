"use client";

import { useForm, FormProvider } from 'react-hook-form';
import { InputCustom } from '@/components/Atons';
import { redirect } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './formregister-scheme';
import { toast } from 'react-toastify';
import { IFormInput, registerUsuarioServerSideProps } from '../functions-request';

export const FormRegister = () => {
  const methods = useForm<IFormInput>({ resolver: yupResolver(formSchema), mode: 'onChange', defaultValues: { name: '', email: '', telefone: '', cpf: '', password: '', repassword: '' } });

  const onSubmit = async (data: IFormInput) => {
    const response = await registerUsuarioServerSideProps(data);
    if (response.statusCode === 201) {
      toast.success("Usuario criado com sucesso!");
      redirect("/login");
    }
    else {
      toast.error(response.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4 p-6 bg-white rounded-md w-full max-w-[80%] lg:max-w-[80%] mx-auto" >

        <InputCustom name="email" label="Email" type="email" required={true} pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/} />
        <div className='w-full flex flex-col  md:space-x-5 md:flex-row'>
          <InputCustom name="name" label="Username" required={true} />
          <InputCustom name="telefone" label="Telefone" type="tel" required={true} />
          <InputCustom name="cpf" label="CPF" type="text" required={true} pattern={/^\d{3}\.\d{3}\.\d{3}-\d{2}$/} placeholder={"xxx.xxx.xxx-xx"} />
        </div>
        <div className='w-full flex flex-col  md:space-x-5 md:flex-row'>
          <InputCustom name="password" label="Senha" type="password" required={true} />
          <InputCustom name="repassword" label="Confirme a senha" type="password" required={true} />
        </div>
        <div className='flex items-center justify-center'>
          <button type="submit" className="w-full lg:w-48 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Registrar</button>
        </div>

      </form>
    </FormProvider>
  );
}