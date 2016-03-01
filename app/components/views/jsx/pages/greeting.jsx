//var React = require('react');
import React from 'react'

var Greeting = React.createClass({

      componentDidMount: function () {


      },
      render: function () {
        return (
            <div className="container"> whose on first not me I AM time: {new Date().getTime()}</div>
        );
      }
  });
//
module.exports = Greeting;


