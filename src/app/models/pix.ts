import { Conta } from "./conta";
import { Usuario } from "./user";

export class Pix {
    pixId: number | undefined
    chaveAleatoria: string
    cpfCnpj: number
    telefone: number
    email: string
    usuario: Usuario[]
    conta: Conta []

    constructor(
        chaveAleatoria: string,
        cpfCnpj: number,
        telefone: number,
        email: string,
        usuario: Usuario[],
        conta: Conta[]
    ){
        this.chaveAleatoria = chaveAleatoria
        this.cpfCnpj = cpfCnpj
        this.telefone = telefone
        this.email = email
        this.usuario = usuario
        this.conta = conta
    }
}