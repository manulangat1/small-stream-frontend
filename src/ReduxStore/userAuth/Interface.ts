
export interface User {
    username:string,
    email:string 
}


export interface Message{
    message:string | undefined;
}
export interface Profile {
    user:User,
    success:boolean
}
export interface userRes {
    user:User,
    token:string
}
export interface userInitialState {
    readonly user?: User,
    readonly message?: Message | undefined,
    readonly profile?: Profile
    loading:boolean
}

