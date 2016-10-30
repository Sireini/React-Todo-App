import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component {
  test (){
    $('.t').text('color');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} onClick={this.test} className="App-logo" alt="logo" />
          <h2 className="t">Welcome to Reacts</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
