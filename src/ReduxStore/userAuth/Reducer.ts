import { userInitialState } from "./Interface";
import { userTypeAction, UserTypes } from "./Types";


const initialState: userInitialState =  {
    loading:true
}

export const userReducer = (state=initialState,action:userTypeAction) => {
    switch(action.type){
        case UserTypes.LOGIN_USER:
            console.log(action.payload.data)
            localStorage.setItem('sstoken',action.payload.data.token)
            return {
                ...state,
                message:undefined,
                user:action.payload.data,
                loading:false
            }
        
        case UserTypes.LOGIN_FAIL:
            console.log(action.payload,'-->')
            return{
                ...state,
                message:action.payload.error,
                loading:false
            }
        case UserTypes.LOAD_PROFILE:
            console.log(action.payload.data)
            return{
                ...state,
                loading:false,
                profile:action.payload.data

            }
        case UserTypes.LOADING:
            return {
                ...state,
                loading:true
            }
        default: return state
    }
}