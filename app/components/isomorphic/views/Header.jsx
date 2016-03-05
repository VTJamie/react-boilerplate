import React from 'react'
export default React.createClass({
  clickEvent(e) {
    console.log("Uhm");
  },
  render() {
    return <div id="junk"><button onClick={this.clickEvent}>Header</button></div>
  }
})