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

  },
  componentDidMount() {

  },
  componentWillReceiveProps(nextprops) {

  },
  shouldComponentUpdate(nextprops, nextstate) {

    return true;
  },
  componentWillUpdate(nextprops, nextstate) {

  },
  componentDidUpdate(prevprops, prevstate) {

  },
  componentWillUnmount() {

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