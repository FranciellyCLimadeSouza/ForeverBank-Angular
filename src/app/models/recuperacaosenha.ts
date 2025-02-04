export class RecuperacaoSenha {
    recuperacaoSenhaId: number | undefined
    usuarioId: number
    token: string
    dataCriacao: Date
    
    constructor(
        usuarioId: number,
        token: string,
        dataCriacao: Date
    ){
        this.usuarioId = usuarioId
        this.token = token
        this.dataCriacao = dataCriacao
    }
}