import { Message, User } from "./Interface";

export enum UserTypes {
    LOGIN_USER="LOGIN_USER",
    LOGIN_FAIL="LOGIN_FAIL"
}


export interface UserLoaded {
    type: typeof UserTypes.LOGIN_USER,
    payload: {
        data: User 
    }
}

export interface loginFail {
    type: typeof UserTypes.LOGIN_FAIL,
    payload:{
        error:Message
    }
}

export type userTypeAction = UserLoaded | loginFail