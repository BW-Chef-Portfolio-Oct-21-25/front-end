import React, {useState} from "react";
import { connect } from 'react-redux';
import { Link, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Login from './Login';
import CreatePost from './CreatePost';
import SignUp from './SignUp';
import  Success  from './sucess';
import ChefPortfolio from './ChefPortfolio';  
// import { ChefList } from './chefs/ChefList'
import * as actionCreators from '../state/actionCreators';
import { UpdateItem } from './updatePortfolio'
import axios from 'axios'

const PrivateRoute = (Component, props) => {
    return localStorage.getItem('token') ? (<Component {...props}/>) : (<Redirect to='/'/>)
}

export function Navbar(props) {

  const [savedList, setSavedList] = useState([]);
  const [posts, setPosts] = useState([]);

  const addToSavedList = posts => {
    setSavedList([...savedList, posts]);
  };


  const deletePost = (id) => (e) => {


    axios.delete(`http://localhost:5000/api/movies/${id}`)
      .then(({ data }) => {

        setPosts(posts.filter(post => post.id !== data));
        window.location.href = "/";
      })
      .catch(err => console.log(err));

  }




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
          <Link to = "/portfolio">Portfolio</Link>
        </div>
      </nav>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/createpost" component={CreatePost} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        {/* <Route exact path="" component={ChefList}/> */}
        <Route  path = "/success" component = {Success}/>
        <Route path = '/portfolio' component = {ChefPortfolio} exact/>
        <Route path = '/updatepost/:id' render = {props => {
          return <UpdateItem {...props} />
        }
        }/>
        <Route
        path="/portfolio/:id"
        render={props => {
          return <ChefPortfolio {...props} addToSavedList={addToSavedList} deletePost={deletePost} />;
        }}
      />
      </main>
    </div>
  );
}
export default connect(state=>state, actionCreators)(Navbar);