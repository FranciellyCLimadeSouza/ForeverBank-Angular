import { User } from "./user";

export class Note {
    id: number | undefined
    title: string
    content: string
    update: Date
    user: User

    constructor(
        title: string,
        content: string,
        update: Date,
        user: User,
    ){
        this.title = title
        this.content = content
        this.update = update
        this.user = user
    }
}
