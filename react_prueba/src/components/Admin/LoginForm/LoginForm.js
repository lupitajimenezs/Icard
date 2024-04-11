import React from 'react';
import { Button, Form, FormButton } from 'semantic-ui-react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import {toast} from 'react-toastify';
import { useAuth } from '../../../hooks';

import { loginApi } from '../../../api/user';
import './LoginForm.scss';

export function LoginForm() {

    const {login} = useAuth();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: yup.object(validationShema()),
        onSubmit: async (formValue) => {
            try {
                const response = await loginApi(formValue);
                const {access} = response;
                login(access)
            } catch (error) {
                toast.error(error.message)
            }
        }
    });

    return (
        <Form className='login-form-admin' onSubmit={formik.handleSubmit}>
            <Form.Input name="email" placeholder="Correo electronico" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email}/>
            <Form.Input name="password" type="password" placeholder="Contraseña" value={formik.values.password} onChange={formik.handleChange}/>
            <Button type="submit" content="Iciar sesión" primary fluid/>
        </Form>
    )
}

function initialValues(){
    return {
        email: 'lupita.san.9810@gmail.com',
        password: '',
    };
}

function validationShema() {
    return {
        email: yup.string().email(true).required(true),
        password: yup.string().required(true),
    };
}