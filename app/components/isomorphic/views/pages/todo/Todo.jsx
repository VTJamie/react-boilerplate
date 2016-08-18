import React from 'react'
import Header from '../../header/Header'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import todoService from '../../../services/todo-service'
import { bindActionCreators } from 'redux'
import Button from 'react-bootstrap/lib/Button';
import TodoItem from './TodoItem'

function mapStateToProps(state) {     
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            todo: bindActionCreators(todoService, dispatch)            
        }
    };
}

class Todo extends React.Component {
  
  constructor() {
    super();
    this.state = {};
  }  
  componentWillMount() {
   this.refreshTodos();
  }  
  shouldComponentUpdate(nextprops, nextstate) {  
    return true;
  } 
  refreshTodos() {
    this.props.actions.todo.getTodos();    
  }
  captureKeyup(e) {
    if (e.keyCode === 13) {
      var target = e.target;
      this.props.actions.todo.addTodo({todo: e.target.value}).then(() => {
        this.props.actions.todo.getTodos();
        target.value  = "";
      });  
    }
  }  
  render() {
    var todos = [],
        i;
    if (this.props.todos && this.props.todos.length) {
      for (i = 0; i < this.props.todos.length; i++) {

        todos.push(
            <TodoItem key={i} item={this.props.todos[i]} />
          );
      }
    }
    else {
      todos = <li className="list-group-item">No Todo Items</li>
    }
    return (
        <div className="container">            
            <ul className="list-group">
              {todos}
            </ul>
            <input value={this.state.todoEntry} className="form-control" onKeyUp={this.captureKeyup.bind(this)}  />
        </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)