import React from 'react'
import Header from '../../header/Header'
import { Link } from 'react-router'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

class About extends React.Component {  
  constructor() {
    super();
    this.state = {
      "greeting": "About the Boilerplate!"
    };
  }
  shouldComponentUpdate(nextprops, nextstate) {
    return true;
  }  
  render() {
    return (
        <div>
           <div className="jumbotron">
           {this.state.greeting}
           </div>
          </div>
        )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(About)