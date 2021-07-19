import { combineReducers  } from "redux";
import { videoReducer } from "./videos/Reducer";


export default combineReducers({
    videos: videoReducer
});