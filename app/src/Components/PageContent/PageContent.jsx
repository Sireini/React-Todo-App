import React, { Component } from 'react';
import '../../App.css';
// import $ from 'jquery';

import ListItem from '../ListItem/ListItem.jsx';

class PageContent extends Component {
  render() {
    return (
        <div id="page-content-wrapper">
            <button type="button" className="hamburger is-closed" data-toggle="offcanvas">
                <span className="hamb-top"></span>
    			<span className="hamb-middle"></span>
				<span className="hamb-bottom"></span>
            </button>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2">
                        <div className="list-view">
                            <p><strong>Display:</strong></p>
                            <a href="#" id="list"><span className="fa fa-th-list"></span></a>
                            <a href="#" id="grid"><span className="fa fa-th"></span></a>
                        </div>

                        <h1 className="m-b-md" name="Sylvan">Title has to be set</h1>
                        <div id="products" className="row list-group">
                            <ListItem title='Product Title' message="Product message"></ListItem>
                            <ListItem title='Product Title' message="Product message"></ListItem>
                            <ListItem title='Product Title' message="Product message"></ListItem>
                            <ListItem title='Product Title' message="Product message"></ListItem>
                            <ListItem title='Product Title' message="Product message"></ListItem>
                            <ListItem title='Product Title' message="Product message"></ListItem>
                            <ListItem title='Product Title' message="Product message"></ListItem>
                            <ListItem title='Product Title' message="Product message"></ListItem>
                            <ListItem title='Product Title' message="Product message"></ListItem>
                        </div>
                    </div>                         
                </div>
            </div>
        </div>
    );
  }
}

export default PageContent;
