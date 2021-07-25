import { Dispatch } from "redux";
import { ActionHandler, ApiEndpoints } from "../../utils";
import { UserTypes } from "./Types";



export const login = (email:string,password:string ) => (dispatch:Dispatch) => {
    const data = JSON.stringify({email,password})
    return ActionHandler(
		{ url: ApiEndpoints.login, method: 'POST', dispatch, data },
		res => {
			const { data } = res.data;
			console.log(data)

			dispatch({ type: UserTypes.LOGIN_USER ,payload:{data:data}});
		},
		error => {
            console.log(error)
			dispatch({ type: UserTypes.LOGIN_FAIL,payload:{error:error.message}});
		},
	);
}

export const getProfile = () => (dispatch:Dispatch) => {
	return ActionHandler(
		{ url: ApiEndpoints.profile, method: 'GET', dispatch },
		res => {
			const { data } = res;
			console.log("profile is",data)

			dispatch({ type: UserTypes.LOAD_PROFILE ,payload:{data}});
		},
		error => {
            console.log(error)
			dispatch({ type: UserTypes.LOGIN_FAIL,payload:{error:error.message}});
		},
	);
}