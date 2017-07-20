import React, { Component } from 'react';
import '../../App.css';
// import $ from 'jquery';

import TodoItemComponent from '../TodoItemComponent/TodoItemComponent';
import AddTodoComponent from '../AddTodoComponent/AddTodoComponent';


class TodoAppComponent extends Component {
  render() {
    return (
        <div id="page-content-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-lg-offset-3">
                        <h1 className="m-b-md">What needs to be done?</h1>
                        
                        <AddTodoComponent></AddTodoComponent>
                        <ul className="list-group">
                            <TodoItemComponent title="Product Title" todo="Product message"></TodoItemComponent>
                        </ul>
                    </div>                         
                </div>
            </div>
        </div>
    );
  }
}

export default TodoAppComponent;
