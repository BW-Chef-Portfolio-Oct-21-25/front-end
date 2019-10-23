import React from "react";
import { Link, Route } from "react-router-dom";
import Home from "./Home";
import { CreatePost } from './CreatePost';
import { Login } from './Login';
import { SignUp } from './SignUp';
// import { ChefList } from './chefs/ChefList'

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar">
        <div className="left-nav">
          <span className="red">Chef<span className="green">Diaries</span></span>
        </div>
        <div className="right-nav">
          <Link to="/">Home</Link>
          <Link to="/createpost">Create Post</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          {/* <Link to="/chefs">Chefs</Link> */}

        </div>
      </nav>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/createpost" component={CreatePost} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        {/* <Route exact path="" component={ChefList}/> */}
      </main>
    </div>
  );
}
