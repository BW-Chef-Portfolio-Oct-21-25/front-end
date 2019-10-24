import React, { useRef } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actionCreators from '../state/actionCreators';
import './scss/signup.scss'

export function SignUp(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef(); 

  function submit(e) {
    e.preventDefault();
    axios
      .post("https://bwchefportfolio.herokuapp.com/api/users/register", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
        email: emailRef.current.value,
      })
      .then(response => {
       console.log(response)
       props.history.push('/success')
      })
      .catch(error => {
          console.log(error)
      });
  }

  return (
      <div className = 'signup-container'>
        <h1>Chef Portfolio</h1>
        <div className = "signup">
        <div className = "image">
          <div className = "cicle-one"></div>
          <div className = "cicle-two">
            <img src="https://cdn2.iconfinder.com/data/icons/school-34/100/notebook_with_pencil-41-512.png" alt="image"/>
          </div>
        </div>
        <div className = "signup-form">
        <h1>Sign Up </h1>
        <form>
        <label>
            Email
          <input name="email" type="email" ref={emailRef} />
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
      <p>Have an account?</p>
      </div>
      </div>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(SignUp);

