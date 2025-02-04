import { InvestimentoTipo } from "./investimentotipo";
import { Conta } from "./conta";

export class Investimento {
    investimentoId: number | undefined
    dataInicio: Date
    contaId: Conta[]
    dataFim: Date
    investimentoTipo: InvestimentoTipo[]

    
    constructor(
        dataInicio: Date,
        contaId: Conta[] = [],
        dataFim: Date,
        investimentoTipo: InvestimentoTipo[] = []
    ){
        this.dataInicio = dataInicio
        this.contaId = contaId
        this.dataFim = dataFim
        this.investimentoTipo = investimentoTipo
    }
}