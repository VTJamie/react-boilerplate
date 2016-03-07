import React from 'react'
import Header from '../../header/Header'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import {  } from 'redux'

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {

    function fetchPostsIfNeeded() {
               return (dispatch, getState) => {
                    dispatch({type: "MYTYPE", junk: 'YO DOG!'});
               }
             }

    dispatch(fetchPostsIfNeeded());

    return {};
}

const component = React.createClass({
  getInitialState() {

        return {
            "greeting": "Hello World!"
        };

  },
  componentWillMount() {
    fetch('/rest/example').then((result) => {
        result.json().then(function (finalresult) {
            console.log(finalresult);
        });
    });

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
  clickEvent() {
    this.setState({
        "greeting": "Hello World! " + new Date().getTime()
    });
  },
  render() {
    return (
        <div className="container">
            <div onClick={this.clickEvent}>{this.state.greeting}</div>
            <div>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(component)