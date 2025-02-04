export class InvestimentoTipo {
    investimentoTipoId: number | undefined
    tipo: string
    descricao: string

    constructor(
        tipo: string,
        descricao: string
    ){
        this.tipo = tipo
        this.descricao = descricao
    }
}