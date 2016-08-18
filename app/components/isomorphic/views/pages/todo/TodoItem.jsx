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
   this.setState(this.props.item);
  }  
  shouldComponentUpdate(nextprops, nextstate) {  
    return true;
  }
  checkChange() {
    this.state.checked = !this.state.checked;
    this.setState(this.state);
    this.props.actions.todo.updateTodo(this.state);

  }
  deleteItem() {
    this.props.actions.todo.deleteTodo(this.state);
  }
  render() {
    var text = this.state.todo;
    if (this.state.checked) {
        text = <del>{this.state.todo}</del>
    }
    return (
        <li className="col-xs-12 list-group-item">
            <div className="col-xs-3">
                <input type="checkbox" defaultChecked={this.state.checked} onChange={this.checkChange.bind(this)} />
            </div>
            <div className="col-xs-6">
                {text}
            </div>
            <div className="col-xs-3">
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