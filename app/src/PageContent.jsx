import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class PageContent extends Component {
    test (){
        $('.t').text('color');
    }

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

                        <h1 className="m-b-md">Title has to be set</h1>

                            <div id="products" className="row list-group">
                                <div className="item col-xs-4 col-lg-4">
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
                                <div className="item col-xs-4 col-lg-4">
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
                                <div className="item col-xs-4 col-lg-4">
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
                            </div>
                        </div>                         
                    </div>
                </div>

               

            


    </div>

    );
  }
}

export default PageContent;
