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

const component = React.createClass({
  getInitialState() {
        return {
            "greeting": "About the Boilerplate!"
        };
  },
  componentWillMount() {
    console.log("componentWillMount");
  },
  componentDidMount() {
    console.log("componentDidMount");
  },
  componentWillReceiveProps(nextprops) {
    console.log("componentWillReceiveProps", nextprops);
  },
  shouldComponentUpdate(nextprops, nextstate) {
    console.log("shouldComponentUpdate", nextprops, nextstate);
    return true;
  },
  componentWillUpdate(nextprops, nextstate) {
    console.log("componentWillUpdate", nextprops, nextstate);
  },
  componentDidUpdate(prevprops, prevstate) {
    console.log("componentDidUpdate", prevprops, prevstate);
  },
  componentWillUnmount() {
    console.log("componentWillUnmount");
  },
  render() {
    return (
        <div className="container">
            <Link to="/">{this.state.greeting}</Link>
        </div>
        )
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(component)