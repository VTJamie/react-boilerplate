import React from 'react'
import reactPanelService from '../../services/react-panel-service'
 import { connect } from 'react-redux' 
 import { bindActionCreators } from 'redux'

 function mapStateToProps(state) {           
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            reactPanel: bindActionCreators(reactPanelService, dispatch)
        }
    };
}

export var ReactPanelContent = connect(mapStateToProps, mapDispatchToProps)(React.createClass({    
    shouldComponentUpdate(nextprops, nextstate) {    
    return true;
  },
  closePanels() {
    this.props.actions.reactPanel.closePanels();
  },
    render() {
      let classValue = ["react-panel-content"];      

       if (this.props.reactPanel && this.props.reactPanel.left) {
        classValue.push("react-panel-expand-left");
      }
      if (this.props.reactPanel && this.props.reactPanel.right) {
        classValue.push("react-panel-expand-right");
      }

      classValue = classValue.join(" ");  

        let overlay = undefined;
      if (this.props.reactPanel && (this.props.reactPanel.left || this.props.reactPanel.right)) {

      overlay = <div className="react-panel-content-click-overlay" onClick={this.closePanels}>&nbsp;</div>
    }    
      return (
        <div className={classValue} >
          {this.props.children}
          {overlay}
        </div>
      );
    }
  }));

export var  ReactPanels = React.createClass({
    render() {
    
      return (
        <div className="react-panels">
          {this.props.children}
          
        </div>
      );
    }
  });

 export var  ReactPanelLeft = React.createClass({
    render() {
      return (
        <div className='react-panel react-panel-left'>
          {this.props.children}
        </div>
      );
    }
  });

export var ReactPanelRight = React.createClass({
    render() {
      return (
        <div className='react-panel react-panel-right'>
        {this.props.children}
        </div>
      );
    }
  });