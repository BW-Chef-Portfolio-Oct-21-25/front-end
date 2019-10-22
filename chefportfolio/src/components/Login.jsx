import React, { useState } from 'react'
import axios from 'axios'


const initialLogIn = {
    email: " ",
    username: " ",
    password: " "
}


export function Login(props){
    const [user, setUser]= useState(initialLogIn)

    const onSubmit = e => {
        e.preventDefault();
        const options = {
          method: "POST",
          url: "https://bwchefportfolio.herokuapp.com/api/users/login",
          data: user
        };
        axios(options)
          .then(res => {
            console.log(res.data);
    
            window.localStorage.setItem("token", res.data.token);
            props.history.push("/dashboard");
          })
          .catch(err => {
            console.log(err);
            alert("An error occurred!");
          });
    };

    const onInput = e =>{
        setUser({
            ...user,
            ...{[e.target.name]: e.target.value}
        })
    }

    return (
        <div>
            <h1>Log In</h1>
            <form>
                <label>
                    Email
                    <input name = "email" type = "email" value = {user.email} onChange ={onInput}/>
                </label>
                <label>
                    Username
                    <input name = "username" type = "text" value = {user.username} onChange ={onInput}/>
                </label>
                <label>
                    Password
                    <input name = "password" type = "password" value = {user.password} onChange ={onInput}/>
                </label>
            </form>
            <button onClick = {onSubmit}>Login</button>
        </div>
    )
}




// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { connect } from 'react-redux';
// import { addUser } from "../state/actionCreators";
// import axios from 'axios'

// const initialLogIn = {
//     email: " ",
//     username: " ",
//     password: " "
// }


// export function Login (props){
    
//     const {addUser, validationSchema} = props

//     const onSubmit = (values) => {

//         axios.post('https://bwchefportfolio.herokuapp.com/api/users/login', {
//             email: values.email,
//             username: values.username,
//             password: values.password
//         })
//         .then( response => {
//             localStorage.setItem('token', response.data.token);
//             console.log(response.data);
//             props.history.push('/home')
//         })
//         .catch(error => console.log(error))
//     }


//     return(
//         <Formik
//         validationSchema = {validationSchema}
//         initialValues = {initialLogIn}
//         onSubmit = {onSubmit}
//         render = {props => {
//             return(
//                 <Form>
//                     <h1>Log In</h1>
//                     <label>
//                         Email
//                         <Field type = "email" name = "email"/>
//                         <ErrorMessage name = "email" component = "div"/>
//                     </label>
//                     <label>
//                         Username
//                         <Field type = "text" name = "username"/>
//                         <ErrorMessage name = "username" component = "div"/>
//                     </label>
//                     <label>
//                         Password
//                         <Field type = "password" name = "password"/>
//                         <ErrorMessage name = "password" component = "div"/>
//                     </label>
//                     <button type = 'submit'>Log In</button>
//                 </Form>
//             )
//         }}
        
//         />
//     )
// }


// const mapStateToProps = state => ({
//     error: state.error,
//     addUser: state.addUser,
//     fetchingData: state.fetchingData
// })

// export default connect(
//     mapStateToProps, 
//     {addUser}
// )(Login)