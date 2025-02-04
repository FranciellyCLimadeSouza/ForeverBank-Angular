import { Usuario } from "./user";

export class Conta {
    contaId: number | undefined
    numero: number
    usuarioId: number
    saldo: number
    dataCriacao: Date
    amount: number
    amountTipo: string

    constructor(
        numero: number,
        usuarioId: number,
        saldo: number,
        dataCriacao: Date,
        amount: number,
        amountTipo: string
    ){
        this.numero = numero
        this.usuarioId = usuarioId
        this.saldo = saldo
        this.dataCriacao = dataCriacao
        this.amount = amount
        this.amountTipo = amountTipo
    }
}