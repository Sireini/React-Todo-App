import React, { Component } from 'react';
import './App.css';
// import $ from 'jquery';

class ListItem extends Component {
  render() {
    return (
         <div className="item  col-xs-4 col-lg-4">
                                    <div className="thumbnail">
                                        <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                                        <div className="caption">
                                            <h4 className="group inner list-group-item-heading">
                                                Product title</h4>
                                            <p className="group inner list-group-item-text">
                                                Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                            </p>
                                        </div>
            </div>
        </div>     
    );
  }
}

export default SideBar;



