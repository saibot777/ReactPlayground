import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from '../logo.svg';
import './App.css';
import store from '../store';

import ReduxActions from '../ReduxActions';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            <ReduxActions />
          </p>
      </div>
    );
  }
}

export default App;
