import React, { useRef } from 'react';
import axios from 'axios'


export function Login (){

    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();

    const onSubmit = () => {
        axios.post('https://chefs-portfolio.herokuapp.com/api/users/login', {
            email: emailRef.current.value,
            username: usernameRef.current.value,
            password: passwordRef.current.value
        })

        .then(res => {
            localStorage.setItem('token', res.data.token)
            //props.history.push('/home');
        })

        .catch(error => {
            alert(error.response.data.message)
        })
    }


    return(

        <div>
            <form>
                <label>
                        Email
                    <input type = "email" name = "email" ref ={emailRef}/>
                </label>
                <label>
                        username
                    <input type = "text" name = "Username" ref ={usernameRef}/>
                </label>
                <label>
                        password
                    <input type = "password" name = "password" ref ={passwordRef}/>
                </label>
                <button onClick= {onSubmit}>Submit</button>
            </form>
         </div>
    )
}