import { Container, ContainerCategory } from "@/components/Containers";
import { getAllCategorias, MessageError } from "@/components/Forms/functions-request";

export default async function Categorias() {
    const categorias = await getAllCategorias();

    return (
        <div className='w-full min-h-[100vh] flex flex-col'>
            {!MessageError.isMessageError(categorias) ? (
                <ContainerCategory data={categorias} />
            ) : (<p>Não ha nenhuma categoria cadastrada no sistema</p>)}
            <div className="w-full">
                <h2 className="text-xl text-center mb-2"> Você é administrador e gostaria criar uma nova categoria ? </h2>
                <Container createUrl={"/categorias/new"} updateUrl={"/categorias/update"} deleteUrl={"/categorias/delete"} adjetivo={"nova"} recurso={"categoria"} />
            </div>
        </div>
    );
}