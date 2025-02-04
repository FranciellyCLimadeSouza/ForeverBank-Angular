import { Usuario } from "./user";

export class Note {
    id: number | undefined
    title: string
    content: string
    update: Date
    usuario: Usuario

    constructor(
        title: string,
        content: string,
        update: Date,
        usuario: Usuario
    ){
        this.title = title
        this.content = content
        this.update = update
        this.usuario = usuario
    }
}
