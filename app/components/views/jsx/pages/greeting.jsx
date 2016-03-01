//var React = require('react');
import React from 'react'

var Greeting = React.createClass({
      getInitialState: function() {
        return {exampletextbox: 'initval'};
      },
      componentDidMount: function () {


      },
      changedFunc: function (event) {
        this.setState({exampletextbox: event.target.value});
      },
      render: function () {
        return (
            <div className="container">
            <div className="lead"> whose on first not me I AM time: {new Date().getTime()}  Textbox-Value: {this.state.exampletextbox}</div>
            <div>
                <input type="text" value={this.state.exampletextbox} onChange={this.changedFunc} />
            </div>
            </div>
        );
      }
  });

module.exports = Greeting;


