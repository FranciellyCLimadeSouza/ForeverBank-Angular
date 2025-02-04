import { Usuario } from "./user";

export class Role {
    id?: number
    name: string
    usuarios: Usuario[]

    constructor(name: string, usuarios: Usuario[]){
        this.name = name
        this.usuarios = usuarios
    }
}
