import { Video, VideoInitialState } from "./Interface";
import { VideoActionType, VideoTypes } from './Types'
const initialState: VideoInitialState = {
    isLoading: false,
    
}

export const  videoReducer= (state=initialState,action:VideoActionType) =>{
    switch(action.type){
        case VideoTypes.LOAD_VIDEO:
            return {
                ...state
            }
        case VideoTypes.LOAD_VIDEOS_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
}
