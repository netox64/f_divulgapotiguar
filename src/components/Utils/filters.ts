import { MessageError } from "@/components/Forms/functions-request";
import { Plano, Usuario } from "@/components/Forms/types-models";

export const handleFilter = (planos: Plano[], usuarioLogado: Usuario): Plano[] => {
    if (!usuarioLogado || !usuarioLogado.planos) { return []; };
    return planos.filter((plano: Plano) =>
        usuarioLogado.planos.some((usuarioPlano: { planoId: number }) =>
            usuarioPlano.planoId === plano.planoId) && plano.adquirido === true && plano.quantAnuncio > 0
    );
}


export const filterPlanosNotAdquiridos = (planos: Plano[] | MessageError): Plano[] => {
    return MessageError.isMessageError(planos) ? [] : planos.filter((plano: Plano) => plano.adquirido === false);
}