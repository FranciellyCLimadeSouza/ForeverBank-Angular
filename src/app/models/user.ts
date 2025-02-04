// este é nosso model domain referente aos dados de usuario que circularão 
// pelo projeto

//import { Note } from "./note";
import { Role } from "./role";

export class Usuario {
    id: number | undefined
    nomeCompleto: string
    email: string
    telefone: number
    endereco: string
    dataNascimento: Date
    cpfCnpj: string 
    senha: string
    autenticacao: string
    enabled: boolean
    roles: Role[]
    
    
    constructor(
        nomeCompleto: string,
        email: string,
        telefone: number,
        endereco: string,
        dataNascimento: Date,
        cpfCnpj: string,
        senha: string,
        autenticacao: string,
        enabled: boolean,
        roles: Role[] = []
        
    ) {
        this.email = email
        this.nomeCompleto = nomeCompleto
        this.telefone = telefone
        this.endereco = endereco
        this.dataNascimento = dataNascimento
        this.cpfCnpj = cpfCnpj
        this.senha = senha
        this.autenticacao = autenticacao
        this.enabled = enabled
        this.roles = roles
    }
}
