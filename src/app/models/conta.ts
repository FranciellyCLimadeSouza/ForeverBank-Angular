import { Usuario } from "./user";

export class Conta {
    contaId: number | undefined
    numero: number
    usuarioId: number
    saldo: number
    dataCriacao: Date

    constructor(
        numero: number,
        usuarioId: number,
        saldo: number,
        dataCriacao: Date
    ){
        this.numero = numero
        this.usuarioId = usuarioId
        this.saldo = saldo
        this.dataCriacao = dataCriacao
    }
}