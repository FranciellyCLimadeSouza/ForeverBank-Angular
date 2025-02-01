import { User } from "./user";

export class Role {
    id?: number
    name: string
    users: User[]

    constructor(name: string, users: User[]){
        this.name = name
        this.users = users
    }
}
