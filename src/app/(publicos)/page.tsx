import { LinkedCircle, ContainerFiveCent, SpaceY } from "@/components/Atons";
import { LinkStyleButton } from "@/components/Atons/Linkeds";
import { H2, Letreiro, PLimited } from "@/components/Atons/Texts";
import { CardBasic, CardPlano } from "@/components/Cards";
import { ContainerRedesSociais, ContainerRows } from "@/components/Containers";
import { SectionOne, SectionThree, SectionTwo } from "@/components/Containers/Sections";
import { getAllResources } from "@/components/Forms/functions-request";
import { Anuncio, Plano } from "@/components/Forms/types-models";
import { filterPlanosNotAdquiridos } from "@/components/Utils/filters";

export default async function Home() {
    const data = await getAllResources<Anuncio>("anuncios");
    const planos = await getAllResources<Plano>("planos");
    const dataplanos = filterPlanosNotAdquiridos(planos);

    return (
        <div className="w-full h-full">
            <SectionOne>
                <ContainerFiveCent position={"start"}>
                    <SpaceY />
                    <LinkStyleButton label={"O imóvel que você procura esta aqui!"} colorOne={"green"} colorTwo={"blue"} url={"/"} referencia={"section-anunciados"} />
                    <Letreiro title={"Divulga Potiguar"} objAnunciado={"Imóveis"} />
                </ContainerFiveCent>
                <ContainerFiveCent position={"end"}>
                    <H2 texto={" Estamos presentes também nas redes Sociais"} />
                    <ContainerRedesSociais>
                        <LinkedCircle endereco="https://www.facebook.com/" imagem={"facebook.svg"} />
                        <LinkedCircle endereco="/" imagem={"instagram.svg"} />
                        <LinkedCircle endereco="/" imagem={"whatsapp.svg"} />
                        <LinkedCircle endereco="/" imagem={"x.svg"}  />
                        <LinkedCircle endereco="/" imagem={"telegram.svg"} />
                    </ContainerRedesSociais>
                    <SpaceY />
                </ContainerFiveCent>
            </SectionOne>

            <SectionTwo>
                <H2 texto={"Lista de imóveis anunciados"} id="section-anunciados" />
                <ContainerRows marginTop={"mt-12"}>
                    {Array.isArray(data) && data.map((anuncio: Anuncio) => (
                        <CardBasic key={anuncio.anuncioId} id={anuncio.anuncioId} title={anuncio.title} guidance={"Horizontal"}>
                            <PLimited texto={anuncio.descricao} />
                        </CardBasic>
                    ))
                    }
                    {!Array.isArray(data) && <h4>{data.message}</h4>}

                </ContainerRows>
            </SectionTwo>
            <SectionThree>
                <H2 texto={"Planos que cabem no seu bolso"} />
                <ContainerRows marginTop={"mt-1"}>
                    {Array.isArray(dataplanos) && dataplanos.map((plano: Plano) => (
                        <CardPlano key={plano.planoId} planoId={plano.planoId} nome={plano.nome} valor={plano.valor}
                            quantAnuncio={plano.quantAnuncio} duracao={plano.duracao} dataValidade={new Date()} dataAdquerido={new Date()} link={"/login"} />
                    ))}
                    {!Array.isArray(dataplanos) && <h4>Não existe plano cadastrado no sitema ainda.</h4>}
                </ContainerRows>
            </SectionThree>
        </div>
    );
}
