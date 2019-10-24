import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import * as actions from './state/actionCreators';

function App(props) {
  return (
    <Router>
    <div className="App">
      <Navbar/>
    </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    state,
  }
}

export default connect(state=>state, actions)(App);
