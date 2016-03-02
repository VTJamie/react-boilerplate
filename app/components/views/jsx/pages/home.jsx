var React = require('react'),
    Greeting = require('./greeting');


var Home = React.createClass({
      componentDidMount: function () {

      },
      render: function () {
        return (
            <div>OUTSIDE: {new Date().getTime()}
            <Greeting />
            </div>
        );
      }
  });

module.exports = Home;


