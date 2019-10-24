import React, { useRef } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actionCreators from '../state/actionCreators';

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
    <div>
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
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(SignUp);

