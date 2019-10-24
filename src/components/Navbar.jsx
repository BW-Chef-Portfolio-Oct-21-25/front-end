import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import CreatePost from "./CreatePost";
import SignUp from "./SignUp";
import Success from "./sucess";
import ChefPortfolio from "./ChefPortfolio";
// import { ChefList } from './chefs/ChefList'
import * as actionCreators from '../state/actionCreators';
import UpdateItem from './updatePortfolio';
import ChefList from './chefs/ChefList';
import Chef from './chefs/Chef';
import SingleChef from "./chefs/SingleChef";

const PrivateRoute = (Component, props) => {
  return localStorage.getItem("token") ? (
    <Component {...props} />
  ) : (
    <Redirect to="/login" />
  );
};

export function Navbar(props) {
  const logout = e => {
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    console.log(props)
  };
  return (
    <div>
      <nav className="navbar">
        <div className="left-nav">
          <span className="red">
            Chef<span className="green">Diaries</span>
          </span>
        </div>

        <div className="right-nav">
          <Link to="/">Home</Link>
          <Link to="/chefs">Chefs</Link>
          <Link
            to="/createpost"
            style={!localStorage.getItem("token") ? { display: "none" } : null}
          >
            Create Post
          </Link>
          <Link
            to="/portfolio"
            style={!localStorage.getItem("token") ? { display: "none" } : null}
          >
            Portfolio
          </Link>
          <Link
            to="/login"
            style={localStorage.getItem("token") ? { display: "none" } : null}
          >
            Login
          </Link>
          <Link
            to="/signup"
            style={localStorage.getItem("token") ? { display: "none" } : null}
          >
            Sign Up
          </Link>
          <button
            onClick={logout}
            style={!localStorage.getItem("token") ? { display: "none" } : null}
          >
            Logout
          </button>
        </div>
      </nav>
      <main>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/createpost"
          render={props => PrivateRoute(CreatePost, props)}
        />
        <Route
          exact
          path="/portfolio"
          render={props => PrivateRoute(ChefPortfolio, props)}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route  path = "/success" component = {Success}/>
        <Route path = '/updateitem/:id' render = {props => {
          return <UpdateItem {...props} />}}/>
         <Route exact path="/chefs" component={ChefList}/> 
         <Route exact path="/chef/:id" component={SingleChef}/> 
      </main>
    </div>
  );
}

export default connect(state => state, actionCreators)(Navbar);
