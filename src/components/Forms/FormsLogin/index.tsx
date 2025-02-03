"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { formSchema } from "./formlogin-scheme";

interface IFormInput { email: string; password: string; };

export const FormLogin: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({ resolver: yupResolver(formSchema), mode: "onChange" });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    signIn("credentials", { ...data, callbackUrl: "/manager" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input id="email" type="email" {...register("email")} className={`w-full px-3 py-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring ${errors.email ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-300"}`} />
            {errors.email && (<p className="mt-1 text-sm text-red-600">{errors.email.message}</p>)}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input id="password" type="password" {...register("password")} className={`w-full px-3 py-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring ${errors.password ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-300"}`} />
            {errors.password && (<p className="mt-1 text-sm text-red-600">{errors.password.message}</p>)}
          </div>
          <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Login</button>

          <div className="mt-3 flex justify-between">
            <Link href="/forgotpassword" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </Link>
            <Link href="/register" className="text-sm text-blue-500 hover:underline">
              Create account
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};
