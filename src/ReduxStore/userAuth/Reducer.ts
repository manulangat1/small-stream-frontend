import { userInitialState } from "./Interface";
import { userTypeAction, UserTypes } from "./Types";


const initialState: userInitialState =  {
    loading:true
}

export const userReducer = (state=initialState,action:userTypeAction) => {
    switch(action.type){
        case UserTypes.LOGIN_USER:
            return {
                ...state
            }
        
        case UserTypes.LOGIN_FAIL:
            console.log(action.payload,'-->')
            return{
                ...state,
                message:action.payload.error
            }
        default: return state
    }
}