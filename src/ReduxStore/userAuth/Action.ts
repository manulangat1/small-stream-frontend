import { Dispatch } from "redux";
import { ActionHandler, ApiEndpoints } from "../../utils";
import { UserTypes } from "./Types";



export const login = (email:string,password:string ) => (dispatch:Dispatch) => {
    const data = JSON.stringify({email,password})
    return ActionHandler(
		{ url: ApiEndpoints.login, method: 'POST', dispatch, data },
		res => {
			const { data } = res.data;

			dispatch({ type: UserTypes.LOGIN_USER });
		},
		error => {
            console.log(error)
			dispatch({ type: UserTypes.LOGIN_FAIL,payload:{error:error.message}});
		},
	);
}

