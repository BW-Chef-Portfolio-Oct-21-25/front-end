import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import * as actions from './state/actionCreators';
import SinglePost from './components/SinglePost';

function App({ state, getPosts }) {
  return (
    <Router>
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      {/* <Route exact path='/post/:postId' render={props => <SinglePost {...props}/> } /> */}
    
      <main>
        {/* <Route exact path="/" component={Home} /> */}
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
