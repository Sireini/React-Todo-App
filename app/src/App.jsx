import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import $ from 'jquery';

import SideBar from './Components/SideBar/SideBar'
import PageContent from './Components/PageContent/PageContent'


class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} onClick={this.test} className="App-logo" alt="logo" />
      //     <h2 className="t">Welcome to Reacts</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
        
        <div id="wrapper">
        <div className="overlay"></div>
          <SideBar />
          <PageContent />
        </div>
    );
  }
}

export default App;
