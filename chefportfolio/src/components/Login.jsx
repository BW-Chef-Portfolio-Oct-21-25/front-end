import React, { useRef } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actionCreators from '../state/actionCreators';
import './scss/login.scss'

export function Login(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  

  const submit = (e) => {
      e.preventDefault()
    axios
      .post("https://bwchefportfolio.herokuapp.com/api/users/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
        email: emailRef.current.value,
      })
      .then(res => {
       console.log(res)
       props.history.push('/portfolio')
      })
      .catch(error => {
          console.log(error)
      });
  }

  return (
      <div className = "container">
        <div className = "top-design"></div>
        <div className ="login-form">
            <h1>Log In</h1>
            <form>
                <label>
                    Email
                    <input name="email" type="Email" ref={emailRef}/> 
                </label>

                <label>
                    Username
                    <input name="username" type="text" ref={usernameRef} />
                </label>

                <label>
                    Password
                    <input name="password" type="Password" ref={passwordRef} />
                </label>

                <button onClick={submit}>Submit</button>
            </form>
          </div>
        <div className = "bottom-design"></div>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(Login);