import React, { Component } from 'react';
import '../../App.css';
// import $ from 'jquery';

class ListItem extends Component {
  render() {
      
    console.log(this.props.message, this.props.title);

    return (
         <div className="item  col-xs-4 col-lg-4">
            <div className="thumbnail">
                <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                <div className="caption">
                    <h4 className="group inner list-group-item-heading">{this.props.title}</h4>
                    <p className="group inner list-group-item-text">{this.props.message}</p>
                </div>
            </div>
        </div>     
    );
  }
}

export default ListItem;



