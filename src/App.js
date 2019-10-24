import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
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

export default connect(state=>state, actions)(App);
