import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Emily in fullstack JS baby!</h1>
        </header>
        <p className="App-intro">
          <a href="/auth/google">Click here to login with google</a>
          <br />
          <a href="/api/logout">Logout</a>
        </p>
      </div>
    );
  }
}

export default App;
