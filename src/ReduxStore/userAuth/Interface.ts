
export interface User {
    username:string,
    email:string 
}


export interface Message{
    message:string | undefined;
}

export interface userInitialState {
    readonly user?: User,
    readonly message?: Message | undefined,
    loading:boolean
}
