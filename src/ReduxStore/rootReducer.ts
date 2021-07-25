import { combineReducers  } from "redux";
import { userReducer } from "./userAuth/Reducer";
import { videoReducer } from "./videos/Reducer";

export default combineReducers({
    videos: videoReducer,
    users:userReducer
});