import React from 'react';
import Axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { addUser } from "../state/actionCreators";
import axios from 'axios'

const initialLogIn = {
    email: " ",
    username: " ",
    password: " "
}


export function Login (props){
    
    const {addUser, validationSchema} = props

    const onSubmit = (values) => {

        Axios.post('https://chefs-portfolio.herokuapp.com/api/users/login ', {
            email: values.email,
            username: values.username,
            password: values.password
        })
        .then( response => {
            localStorage.setItem('token', response.data.token);
            console.log(response.data);
            props.history.push('/home')
        })
        .catch(error => console.log(error))
    }


    return(
        <div></div>
    )
}