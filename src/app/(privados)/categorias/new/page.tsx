import { FormRegisterCategoria } from "@/components/Forms/FormRegisterCategoria";

export default function NovaCategoria() {
    return (<div className='w-full min-h-[100vh] flex flex-col'>
        <h3 className="text-center">Criar Uma Categoria</h3>
        <FormRegisterCategoria />
    </div>);
}