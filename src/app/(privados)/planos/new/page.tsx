import { FormRegisterPlano } from "@/components/Forms";

export default function NovoPlano() {
    return (<div className='w-full min-h-[100vh] flex flex-col'>
        <h3 className="text-center">Criar Um Plano</h3>
        <FormRegisterPlano />
    </div>);
}