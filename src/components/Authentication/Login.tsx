import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import ReusableInputs from '../Reusable/Inputs/ReusableInputs';
import { CommonButton } from '../Reusable/Buttons/Buttons';
import { login } from '../../ReduxStore/userAuth/Action';
import { RootState } from '../../ReduxStore/store';
import { Redirect } from 'react-router-dom';

interface State {
    email:string,
    password:string
}

const Login = () => {
    const dispatch = useDispatch();
    const error:any =  useSelector((state:RootState) => state.users['message'])
    const [values, setValues] = useState<State>({
        email:'',
        password:''
    })
    const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		// validationSchema: validationSchema,
		onSubmit: async values => {
            console.log("submitting",values.email,values.password)
			// setLoading(todos?.loading);
            login(values.email,values.password)(dispatch)
		},
	});
    const loginElements = [ 
        {
			id: 1,
			name: 'email',
			label: 'Email',
			type: 'email',
			placeholder: '',
			beforeLink: '',
			link: '#',
			textLink: '',
		},
		{
			id: 2,
			name: 'password',
			type: 'password',
			placeholder: '',
			beforeLink: '',
			// link: Routes.forgotPassword,
			textLink: 'Forgot Password ?',
			label: 'Password',
		},
    ]
    console.log(error)
    if(localStorage.getItem('sstoken')){
        return <Redirect to="/" />
    }
    return (

        <section>
            {
                error ? (
                    <h1>{error}</h1>
                ) : ''
            }
            <form onSubmit={formik.handleSubmit}>
                <ul>
                    {
                        loginElements.map(element => (
                            <li key={element.id}>
                                <ReusableInputs name={element.name} label={element.label} type={element.type} placeholder={element.placeholder} formik={formik}/>
                            </li>
                        ))
                    }
                </ul>
                <CommonButton
                    command="LOGIN"

                />
            </form>
        </section>
    )
}

export default Login
