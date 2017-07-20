import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import $ from 'jquery';

import TodoAppComponent from './Components/TodoAppComponent/TodoAppComponent'

class App extends Component {
  render() {
    return (        
        <div id="wrapper">
        <div className="overlay"></div>
          <TodoAppComponent />
        </div>
    );
  }
}

export default App;
