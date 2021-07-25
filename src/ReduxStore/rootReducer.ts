import { combineReducers  } from "redux";
import { userReducer } from "./userAuth/Reducer";
import { videoReducer } from "./videos/Reducer";
import { loadingBarReducer } from 'react-redux-loading-bar'
export default combineReducers({
    videos: videoReducer,
    users:userReducer,
    loadingBar: loadingBarReducer,

});