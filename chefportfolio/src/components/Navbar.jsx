import React from "react";
import { connect } from 'react-redux';
import { Link, Route, Redirect } from "react-router-dom";
import { Home } from "./Home";
import { Login } from './Login';
import { CreatePost } from './CreatePost';
import { SignUp } from './SignUp';

const PrivateRoute = (Component, props) => {
    return localStorage.getItem('token') ? (<Component {...props}/>) : (<Redirect to='/'/>)
}


export function Navbar(props) {
    const logout = () => {
        localStorage.removeItem('token');
    }
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/createpost">Create Post</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <button onClick={logout}>Log Out</button>
      </nav>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/createpost" render={props => PrivateRoute(CreatePost, props)} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </main>
    </div>
  );
}
export default connect(state=>state, {})(Navbar);