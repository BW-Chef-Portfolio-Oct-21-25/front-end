import React from 'react'
import { connect } from 'react-redux'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { addUser } from '../state/actionCreators'
import axios from 'axios';


const initialUser = {
    email: " ",
    username: " ",
    password: " "
}

export function SignUp (props){
    const {addUser, validationSchema} = props;

   const handleSubmit = (values) =>{
       axios.post('https://bwchefportfolio.herokuapp.com/api/users/register', {
           email: values.email,
           username: values.username,
           password: values.password
       })
       .then(response => {
           props.history.push('/success')
       })
       .catch(error => console.log(error))
   }

   return(
       <Formik
       validationSchema = {validationSchema}
       initialValues = {initialUser}
       onSubmit = {handleSubmit}
       render = {props => {
           return(
               <Form>
                   <h1>SIGN UP</h1>
                   <label>
                       Email
                        <Field name = "email" type = "email"/>
                        <ErrorMessage name = "email" component = "div"/>
                   </label>
                   <label>
                       Username
                        <Field name = "username" type = "text"/>
                        <ErrorMessage name = "username" component = "div"/>
                   </label>
                   <label>
                       Password
                        <Field name = "password" type = "password"/>
                        <ErrorMessage name = "password" component = "div"/>
                   </label>
                   <button type = "submit" >Sign Up</button>
               </Form>
           )
       }}
       />
   )
}


const mapStateToProps = state => ({
    error: state.error,
    addUser: state.addUser,
    fetchingData: state.fetchingData
});

export default connect(mapStateToProps,
    { addUser })(SignUp)