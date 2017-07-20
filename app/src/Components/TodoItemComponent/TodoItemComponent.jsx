import React, { Component } from 'react';
import '../../App.css';
// import $ from 'jquery';

class TodoItemComponent extends Component {
  render() {      
    console.log(this.props.todo, this.props.title);

    return (
        <div>            
            <li className="list-group-item todo-item">
                <button className="btn btn-xs btn-react btn-circle m-r-md">
                    <span className="fa fa-check"></span>
                </button>
                {this.props.todo}
                <span className="pull-right">
                    <button className="btn btn-xs btn-react btn-circle m-r-xs">
                        <span className="fa fa-pencil-square-o"></span>
                    </button>
                    
                    <button className="btn btn-xs btn-react btn-circle">
                        <span className="fa fa-trash-o"></span>
                    </button>
                </span>
            </li>
        </div>

        //  <div className="item col-xs-4 col-lg-4">
        //     <div className="thumbnail">
        //         <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
        //         <div className="caption">
        //             <h4 className="group inner list-group-item-heading">{this.props.title}</h4>
        //             <p className="group inner list-group-item-text">{this.props.message}</p>
        //         </div>
        //     </div>
        // </div>     
    );
  }
}

export default TodoItemComponent;



