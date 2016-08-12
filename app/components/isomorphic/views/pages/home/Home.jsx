import React from 'react'
import Header from '../../header/Header'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import exampleService from '../../../services/example-service'
import reactPanelService from '../../../services/react-panel-service'
import { bindActionCreators } from 'redux'
import Button from 'react-bootstrap/lib/Button';

function mapStateToProps(state) {    
    return state;
}

function mapDispatchToProps(dispatch) {
    return {

        actions: {
            example: bindActionCreators(exampleService, dispatch),
            reactPanel: bindActionCreators(reactPanelService, dispatch)
        }

    };
}

class Home extends React.Component {
  
  constructor() {
    super();
    this.state = {
      "greeting": "Hello World!"
    };      
  }  
  componentWillMount() {
    this.props.actions.example.getList();    
  }  
  shouldComponentUpdate(nextprops, nextstate) {  
    return true;
  }
  clickEvent() {        
     this.setState({
         "greeting": "Hello World! " + new Date().getTime()
     });
  }  
  refreshExamples() {
    this.props.actions.example.getList();
  }
  render() {
    let rows = [];    
    if (this.props.exampleList != undefined) {
      let idx = 0;
      for (idx = 0; idx < this.props.exampleList.example.length; idx++) {
          rows.push(<div key={this.props.exampleList.example[idx]}>{this.props.exampleList.example[idx]}</div>);
      }
    }

    return (
        <div className="container">
            <div onClick={this.clickEvent.bind(this)}>{this.state.greeting}</div>
            <div>{rows}</div>            
            <div>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)