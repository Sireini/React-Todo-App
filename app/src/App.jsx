import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

import SideBar from './SideBar'
import PageContent from './PageContent'


class App extends Component {
  test (){
    $('.t').text('color');
  }

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
        
      //   <button type="button" className="btn btn-primary">Primary</button>
        <div id="wrapper">
        <div className="overlay"></div>
          <SideBar />
          <PageContent />
          </div>
      // </div>

      
    );
  }
}

export default App;
