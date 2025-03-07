import { FormRegisterImovel } from "@/components/Forms";

export default function NewImovel() {
    return (
        <div className='w-full min-h-[100vh]'>
            <h2 className="p-5 text-xl text-center font-semibold text-blue-500">Anunciar Imovel</h2>
            <FormRegisterImovel />
        </div>
    );
}