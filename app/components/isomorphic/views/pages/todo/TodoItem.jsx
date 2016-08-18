import React from 'react'
import Button from 'react-bootstrap/lib/Button';
import { connect } from 'react-redux'
import todoService from '../../../services/todo-service'
import { bindActionCreators } from 'redux'

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

class TodoItem extends React.Component {
  
  constructor() {
    super();
  }  
  componentWillMount() {
  console.log(this.props.item);
   this.setState(this.props.item);
  }  
  shouldComponentUpdate(nextprops, nextstate) {  
    return true;
  }
  checkChange() {
    this.state.checked = !this.state.checked;
    this.setState(this.state);
    console.log(this.state);
    this.props.actions.todo.updateTodo(this.state);

  }
  deleteItem() {
    this.props.actions.todo.deleteTodo(this.state);
  }
  render() {
    
    return (
        <li className="row list-group-item">
            <div className="col-xs-2">
                <input type="checkbox" defaultChecked={this.state.checked} onChange={this.checkChange.bind(this)} />
            </div>
            <div className="col-xs-8">
            {this.state.todo}
            </div>
            <div className="col-xs-2">
                <Button bsStyle="danger" onClick={this.deleteItem.bind(this)}>Delete</Button>
            </div>
        </li>
    )
  }
}

TodoItem.propTypes = {
        item: React.PropTypes.object.isRequired
    };

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)