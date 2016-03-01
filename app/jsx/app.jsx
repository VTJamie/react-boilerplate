var React = require('react'),
    ReactDOM = require('react-dom');


var ReactApp = React.createClass({

      componentDidMount: function () {


      },
      render: function () {
        return (
            <div className="container"> whose on first</div>
        );
      }
  });

/* Module.exports instead of normal dom mounting */

//if (isNode) {
  //  module.exports = ReactApp;
//}
//else {
    ReactDOM.render(<ReactApp />, document.getElementById('root'));
//}

