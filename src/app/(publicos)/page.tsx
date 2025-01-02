import { ButtonCircle, ButtonRoundedLink, ContainerFiveCent, Letreiro, SpaceY} from "@/components/Atons";
import { ContainerRedesSociais } from "@/components/ContainerSociais";
import { SectionOne, SectionTwo } from "@/components/Sections";

export default function Home() {
  return (
    <div className="w-full h-full">
      <SectionOne>
        <ContainerFiveCent position={"start"}>
          <SpaceY />
          <ButtonRoundedLink
            label={"O imóvel que você procura esta aqui!"}
            colorOne={"green"}
            colorTwo={"blue"}
            action={"click"}
          />
          <Letreiro title={"Divulga Potiguar"} objAnunciado={"Imóveis"} />
        </ContainerFiveCent>
        <ContainerFiveCent position={"end"}>
          <h2 className="text-2xl">
            Estamos presentes também nas redes Sociais
          </h2>
          <ContainerRedesSociais>
            <ButtonCircle />
            <ButtonCircle />
            <ButtonCircle />
            <ButtonCircle />
            <ButtonCircle />
          </ContainerRedesSociais>
          <SpaceY />
        </ContainerFiveCent>
      </SectionOne>

      <SectionTwo>
        <SpaceY />
        <SpaceY />
      </SectionTwo>
    </div>
  );
}
