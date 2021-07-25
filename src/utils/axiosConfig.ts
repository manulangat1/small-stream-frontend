import axios from 'axios';

export const baseUrl = process.env.REACT_APP_BACKEND_URL ;

const token = 'test-token';


console.log(baseUrl)

const axiosInstance = axios.create({
	baseURL: baseUrl,
	headers: {
		Authorization: localStorage.getItem(token),
	},
});

axiosInstance.interceptors.request.use(
	(req) => {
		return req;
	},
	(error) => {
		return Promise.reject(error);
	},
);

axiosInstance.interceptors.response.use(
	(res) => {
		return res;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default axiosInstance;