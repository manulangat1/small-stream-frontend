import { Dispatch } from 'redux';
import axios from './axiosConfig';
import { Method } from 'axios';
// import { setError } from 'ReduxStore';

interface AxiosHandler {
	method: Method;
	url: string;
	data?: any;
	dispatch: Dispatch;
	contentType?: string;
}
export const ActionHandler = async (
	values: AxiosHandler,
	response: (values: any) => void,
	reject: (values: any) => void,
): Promise<void> => {
	const { method, url, dispatch, data, contentType } = values;

	try {
		const ContentTypes = contentType ? contentType : 'application/json';
		const token = localStorage.getItem('sstoken');
		if (token) {
			const res = await axios({
				method,
				headers: {
					'Content-Type': ContentTypes,
					Authorization: `Bearer ${token}`,
				},
				data,
				url,
			});
			response(res);
		} else {
			const res = await axios({
				method,
				headers: {
					'Content-Type': ContentTypes,
				},
				data,
				url,
			});
			
			response(res);
		}
	} catch (error) {
			const { status, data } = error.response;
		if (error && error.response) {
			if (status === 500) {
                console.log("Error")
				// setError(data.error || 'An error occurred due to internal server error')(dispatch);
			}
		}
		reject(data);
	}
};