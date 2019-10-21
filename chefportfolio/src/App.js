import React from 'react';
import './App.css';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Home />
    </div>
    </Router>
  );
}

export default App;
