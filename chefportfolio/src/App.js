import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import * as actions from './state/actionCreators';
import { CreatePost } from './components/CreatePost';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SinglePost from './components/SinglePost';
import ChefList from './components/chefs/ChefList';
import SingleChef from './components/chefs/SingleChef';

function App({ state, getPosts }) {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/createpost" component={CreatePost} />
        <Route exact path="/chefs" component={ChefList}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path='/post/:postId' render={props => <SinglePost {...props}/> } />
        <Route exact path="/chef/:chefId" render={props => <SingleChef {...props}/> }/>
      </main>
    </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    state,
  }
}

export default connect(mapStateToProps, actions)(App);
