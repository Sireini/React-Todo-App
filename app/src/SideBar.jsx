import React, { Component } from 'react';
import './App.css';
// import $ from 'jquery';

class SideBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
        <ul className="nav sidebar-nav">
          <li className="sidebar-brand">
            <a href="#">
                Brand
            </a>
          </li>
          <li>
              <a href="#" className="active">
                <i className="fa fa-home"></i>Home
              </a>
          </li>
          <li>
            <a className="collapsible-header waves-effect arrow-r">
              <i className="fa fa-user"></i> About me
            </a>
          </li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Works <i className="fa fa-angle-down rotate-icon"></i></a>
            <ul className="dropdown-menu" role="menu">
              <li className="dropdown-header">Dropdown heading</li>
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </nav>     
    );
  }
}

export default SideBar;
