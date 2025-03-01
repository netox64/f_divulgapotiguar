import { StarsRating } from "@/components/Atons";
import { getAllResources, MessageError } from "@/components/Forms/functions-request";
import { Anuncio } from "@/components/Forms/types-models";
import Image from "next/image";

interface Props { params: { anuncioId: string }; };

export default async function AnuncioDetails({ params }: Props) {
    const parametros = await params;
    const anuncioId = Number(parametros.anuncioId);
    const response = await getAllResources<Anuncio>("anuncios");
    const imoveisfakes = ["imvel#1", "imvel#2", "imvel#3"];

    let anuncio: Anuncio | undefined = undefined;
    if (!MessageError.isMessageError(response)) {
        anuncio = response.find(anuncio => anuncio.anuncioId == anuncioId);
    }
    if (!anuncio) {
        return (
            <div className="w-full min-h-[100vh] flex items-center justify-center">
                <p className="text-gray-700 text-lg">O anúncio solicitado não foi encontrado.</p>
            </div>
        );
    }

    return (
        <div className="w-full bg-white shadow-md rounded-xl p-6 sm:p-8">
            <h1 className="text-3xl font-bold text-center text-custom-blue mb-8">
                Detalhes do Anúncio
            </h1>

            {/* Imagem do Anúncio */}
            <div className="flex justify-center mb-6">
                <Image src={"/imgs/imgs_default.svg"} width={300} height={300} alt={`Imagem do anúncio ${anuncio.title}`} className="rounded-lg shadow-lg object-cover" />
            </div>

            {/* Informações do Anúncio */}
            <div className="space-y-4 text-gray-800">
                <h2 className="text-2xl font-semibold">{anuncio.title}</h2>
                <p className="text-gray-600 leading-relaxed">{anuncio.descricao}</p>
                <p className="text-xl font-bold text-green-600">R$ {anuncio.preco.toFixed(2)}</p>
                <p className="text-sm text-gray-500">Tipo de pagamento: {anuncio.tipoPagamento}</p>
                <p className="text-sm text-gray-500">Publicado em: {new Date(anuncio.dataAnuncio).toLocaleDateString()}</p>
            </div>

            {/* Categorias */}
            {anuncio.categorias.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-700">Categorias:</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {anuncio.categorias.map((categoria) => (
                            <span
                                key={categoria.categoriaId}
                                className="px-4 py-1 bg-blue-500 text-white text-sm rounded-full shadow-md"
                            >
                                {categoria.nome}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Anunciante */}
            <div className="mt-6 flex justify-between items-center border-t pt-4">
                <h3 className="text-lg font-semibold text-gray-700">
                    Anunciado por: <i className="text-sm font-light">@usuario</i>
                </h3>
                <StarsRating rating={5} />
            </div>

            {/* Feedbacks */}
            {anuncio.feedbacks.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-700">Feedbacks:</h3>
                    <div className="space-y-3 mt-2">
                        {anuncio.feedbacks.map((feedback, index) => (
                            <div key={index} className="p-4 bg-gray-50 border rounded-lg shadow-sm">
                                <p className="text-gray-800 text-sm">{feedback.comentario}</p>
                                <p className="text-gray-500 text-xs mt-1">Nota: {8} ⭐</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Imóveis da mesma categoria */}
            <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-700">Outros imóveis desta categoria:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {imoveisfakes.map((imovel, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <img src={"/imgs/imgs_default.svg"} alt={"alt da imagem"} className="w-full h-24 object-cover rounded-md"/>
                            <h4 className="text-sm font-semibold mt-2">{"Um Nome"}</h4>
                            <p className="text-xs text-gray-500">R$ {index.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
