import React from "react";
import { Link, Route } from "react-router-dom";
import { Home } from "./Home";
import { CreatePost } from './CreatePost';
import { Login } from './Login';
import { SignUp } from './SignUp';
import Success from './sucess';

export default function Navbar(props) {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/createpost">Create Post</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to = "/success">Sucess</Link>
      </nav>
      <main>
        <Route exact path="/" component={Home} />
        <Route  path="/createpost" component={CreatePost} />
        <Route  path="/login" component={Login} />
        <Route  path="/signup" component={SignUp} />
        <Route  path = "/success" component = {Success}/>
      </main>
    </div>
  );
}
