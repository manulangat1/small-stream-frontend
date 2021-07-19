import  axios from 'axios'
import { Dispatch} from 'redux'
import { ActionHandler, ApiEndpoints } from '../../utils'
import { VideoTypes } from './Types';


export const GetAllVideos = () => (dispatch: Dispatch) => {
	return ActionHandler(
		{ url: ApiEndpoints.videos, method: 'GET', dispatch },
		res => {
			const { data } = res.data;
			dispatch({ type: VideoTypes.LOAD_VIDEOS, payload: { data } });
		},
		error => {
			dispatch({ type: VideoTypes.LOAD_VIDEOS_FAIL, payload: { errors: error } });
		},
	);
};
