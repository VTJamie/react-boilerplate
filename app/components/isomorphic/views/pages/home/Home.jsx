import React from 'react'
import Header from '../../header/Header'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import exampleService from '../../../services/example-service'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
    console.log(state);
    return state;
}

function mapDispatchToProps(dispatch) {
    return {

        actions: {
            example: bindActionCreators(exampleService, dispatch)
        }

    };
}

const component = React.createClass({
  getInitialState() {

        return {
            "greeting": "Hello World!"
        };

  },
  componentWillMount() {
    this.props.actions.example.getList();
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
    let rows = [];
    if (this.props.exampleList != undefined) {
    let idx = 0;
    for (idx = 0; idx < this.props.exampleList.example.length; idx++) {
        rows.push(<div key={this.props.exampleList.example[idx]}>{this.props.exampleList.example[idx]}</div>);
    }
    console.log(rows, this.props.exampleList.example.length);
    }

    return (
        <div className="container">
            <div onClick={this.clickEvent}>{this.state.greeting}</div>
            <div>{rows}</div>
            <div>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(component)