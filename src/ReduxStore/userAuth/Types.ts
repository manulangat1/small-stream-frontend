import { type } from "os";
import { Message, User, userRes } from "./Interface";

export enum UserTypes {
    LOGIN_USER="LOGIN_USER",
    LOGIN_FAIL="LOGIN_FAIL",
    LOADING="LOADING",
    LOAD_PROFILE="LOAD_PROFILE"
}



export interface UserLoaded {
    type: typeof UserTypes.LOGIN_USER,
    payload: {
        data: userRes
    }
}

export interface loginFail {
    type: typeof UserTypes.LOGIN_FAIL,
    payload:{
        error:Message
    }
}

export  interface loadProfile {
    type : typeof UserTypes.LOAD_PROFILE,
    payload:{
        data:User
    }
}

export interface loadingI {
    type: typeof UserTypes.LOADING
}

export type userTypeAction = UserLoaded | loginFail | loadProfile | loadingI