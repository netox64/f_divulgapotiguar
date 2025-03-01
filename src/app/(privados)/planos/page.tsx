import { H2Logado } from "@/components/Atons/Texts/H2Logado";
import { CardPlanoSeller } from "@/components/Cards";
import { Container } from "@/components/Containers";
import { getAllResources, MessageError } from "@/components/Forms/functions-request";
import { Plano } from "@/components/Forms/types-models";

export default async function Planos() {
    const planos = await getAllResources<Plano>("planos");
    const planosNaoAdquiridos: Plano[] = !MessageError.isMessageError(planos) ? planos.filter((plano: Plano) => !plano.adquirido) : [];

    return (
        <div className="w-full min-h-screen flex flex-col items-center px-4">
            <H2Logado texto={"Todos os Planos presentes na Aplicação"} />
            <div className='flex w-full mb-5'>
                <Container createUrl={"/planos/new"} adjetivo={"novo"} recurso={"planos"} />
            </div>
            <div className='w-full flex min-h-[70vh] justify-center flex-wrap mb-5 gap-4'>
                {!MessageError.isMessageError(planosNaoAdquiridos) ? (
                    <div className="w-full flex flex-row gap-3 flex-wrap">
                        {planosNaoAdquiridos.map((plano: Plano) => (
                            <CardPlanoSeller key={plano.planoId} context={plano} />
                        ))}
                    </div>
                ) : (<p className="text-center">Não há nenhum plano cadastrado no sistema</p>)}

            </div>
        </div>
    );
}