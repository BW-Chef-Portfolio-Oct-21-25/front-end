import React from 'react'
// import { Formik, Form, Field, ErrorMessage } from 'formik'
// import * as yup from 'yup';

// const userForm = {
//     email: ' ',
//     username: ' ',
//     password: ' '
// }


export function SignUp (){
//     const addUser = (formValues, actions)=>{
//         const userToSubmit = {
//             email: formValues.email,
//             username: formValues.username,
//             password: formValues.password
//         }

//         console.log(userToSubmit);
//         actions.resetForm();
//     }

//     return (
//         <div>
//             <SignUpForm onSubmit = {addUser} />
//         </div>
//     )
// }


// const validateUser = (formValue) => {
//     const errors = {};

//     if (!formValue.username) {
//         errors.username = 'Username is required!'
//     }

//     if(!formValue.email) {
//         errors.email = 'Email is required!';  
//     }

//     if (!formValue.password) {
//         errors.password = 'Password is required!';
//     }

//     return errors;
// }

// const userValidation = yup.object().shape({
//     username: yup.string().required('Use correct username!'),
//     email: yup.string().required('Enter valid email!').email("Enter a valid email containing @"),
//     password: yup.string().required('Input correct password!')
// })

// function SignUpForm ({onSubmit}){
//     return (
//         <Formik
//         validationSchema = {userValidation}
//         validate = {validateUser}
//         initialValues = {userForm}
//         onSubmit = {onSubmit}  
//         render ={props => {
//             return(
//                 <div>
//                 <label>
//                     Email
//                     <Field name='email' type='email' required/>
//                     <ErrorMessage name='email' component='div' />
//                 </label>
//                  <label>
//                     Username
//                     <Field name='username' type='text' required/>
//                     <ErrorMessage name='username' component='div' />
//                 </label>
//                 <label>
//                     Password 
//                     <Field name = 'password' type = 'password' required/>
//                     <ErrorMessage name = 'password' component = 'div'/>
//                 </label>
//                 <button type ='submit'>Sign Up</button>
//                 </div>

//             )
//         }}      
        
//         />
//     )
}