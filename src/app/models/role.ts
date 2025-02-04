import { Usuario } from "./user";

export class Role {
    id?: number
    roleName: string
    usuarios: Usuario[]

    constructor(roleName: string, usuarios: Usuario[]){
        this.roleName = roleName
        this.usuarios = usuarios
    }
}
