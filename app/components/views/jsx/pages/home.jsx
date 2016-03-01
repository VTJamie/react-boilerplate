var React = require('react'),
    Greeting = require('./greeting');


var Home = React.createClass({
      componentDidMount: function () {

      },
      render: function () {
        return (
            <Greeting />
        );
      }
  });

module.exports = Home;


