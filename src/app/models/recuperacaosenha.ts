export class RecuperacaoSenha {
    recuperacaoSenhaId: number | undefined
    usuarioId: number
    token: string
    dataCriacao: Date
    usuario: string
    
    constructor(
        usuarioId: number,
        token: string,
        dataCriacao: Date,
        usuario: string
    ){
        this.usuarioId = usuarioId
        this.token = token
        this.dataCriacao = dataCriacao
        this.usuario = usuario
    }
}