import React from "react";
import { connect } from 'react-redux';
import { Link, Route, Redirect } from "react-router-dom";
import { Home } from "./Home";
import { Login } from './Login';
import { CreatePost } from './CreatePost';
import { SignUp } from './SignUp';
import  Success  from './sucess';
import { ChefPortfolio } from './ChefPortfolio';  

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
        <Link to = "/success">Sucess</Link>
        <Link to = "/portfolio">Portfolio</Link>
      </nav>
      <main>
        <Route exact path="/" component={Home} />
        <Route  path="/createpost" component={CreatePost} />
        <Route  path="/login" component={Login} />
        <Route  path="/signup" component={SignUp} />
        <Route  path = "/success" component = {Success}/>
        <Route path = 'portfolio' component = {ChefPortfolio}/>
      </main>
    </div>
  );
}
export default connect(state=>state, {})(Navbar);