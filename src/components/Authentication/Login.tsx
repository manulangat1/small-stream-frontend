import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import ReusableInputs from '../Reusable/Inputs/ReusableInputs';
import { CommonButton } from '../Reusable/Buttons/Buttons';

interface State {
    email:string,
    password:string
}

const Login = () => {
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
			// dispatch(loginAction(values.email, values.password));
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

    return (
        <section>
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
