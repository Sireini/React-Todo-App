import React, { Component } from 'react';
import '../../App.css';

class AddTodoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: '',
            todoArray: []
        };
    }

    addTodo(e){
        console.log('clicked');
        this.setState({ todo: e.target.value });
        console.log( this.state.todo );
        
        this.state.todoArray.push(<li key={this.state.todo}>{this.state.todo}</li>);
        
        console.log(this.state.todoArray);
    }
    
    handleChange(e) {
        this.setState({ todo: e.target.value });
    }

    render() {
        return (            
            <div>
                <div className="input-group m-b-md">
                    <input type="text" className="form-control add-todo" placeholder="Todo..." value={this.state.todo} onChange={this.handleChange.bind(this)} />
                    <span className="input-group-btn">
                        <button className="btn btn-react" type="button" onClick={this.addTodo.bind(this)}>Add</button>
                    </span>
                </div>
                <ul>
                    {/* {this.state.todo ? <li>{this.state.todoArray}</li> : null} */}
                    {this.state.todoArray}
                </ul>
            </div>
        );
    }
}

export default AddTodoComponent;
