import React, { useRef } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import axios from "axios";

export function Login(props,{ addUser }) {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const submit = e => {
    e.preventDefault();
    axios
      .post("https://bwchefportfolio.herokuapp.com/api/users/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
        email: emailRef.current.value
      })
      .then(res => {
        props.history.push("/portfolio");
        addUser({
          id: 0,
          username: usernameRef.current.value,
          password: passwordRef.current.value,
          email: emailRef.current.value
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Log In</h1>
      <form>
        <label>
          Email
          <input name="email" type="Email" ref={emailRef} />
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
)(Login);
