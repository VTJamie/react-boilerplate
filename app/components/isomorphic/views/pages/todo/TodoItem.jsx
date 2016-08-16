import React from 'react'


class TodoItem extends React.Component {
  
  constructor() {
    super();
    this.state = {};
  }  
  componentWillMount() {
   
  }  
  shouldComponentUpdate(nextprops, nextstate) {  
    return true;
  } 
  render() {
    
    return (
        <li>{this.props.todo}</li>            
    )
  }
}

export default TodoItem