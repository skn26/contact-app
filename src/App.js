import React, { Component } from 'react';
import './App.css';
import Contacts from './Contact'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import Routes from "./Routes"

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">

        <Link to="/Contacts" >
          <input type="button" value="Contact List" />
        </Link>

        <Link to="/add_contact" >
          <input type="button" value="Add Contact" />
        </Link>

        <Routes/>
      </div>
    </Router>
    );
  }
}

export default App;
