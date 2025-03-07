import { ContentNewAnuncio } from "@/components/Contents/ContentNewAnuncio";

export default async function NewAnuncio() {

    return (
        <div className="w-full min-h-[100vh] flex flex-col items-center justify-start">
            <h2 className="p-5 text-xl font-semibold text-blue-500">Anunciar Imovel</h2>
            <ContentNewAnuncio />
        </div>
    );
}