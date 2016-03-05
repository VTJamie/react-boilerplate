import React from 'react'
export default React.createClass({
  clickEvent(e) {
    console.log("Uhm");
  },
  render() {
    return <div onClick={this.clickEvent}>Header Coolio</div>
  }
})