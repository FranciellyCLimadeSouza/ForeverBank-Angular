// este é nosso model domain referente aos dados de usuario que circularão 
// pelo projeto

import { Note } from "./note";
import { Role } from "./role";

export class User {
    id: number | undefined
    email: string
    password: string
    fullname: string
    enabled:boolean
    roles: Role[]
    notes: Note[]
    
    constructor(email: string,
        password: string,
        fullname: string,
        enabled: boolean = true,
        roles: Role[] = [],
        notes: Note[] = []
        
    ) {
        this.email = email
        this.password = password
        this.fullname = fullname
        this.enabled = enabled
        this.roles = roles
        this.notes = notes
    }
}
