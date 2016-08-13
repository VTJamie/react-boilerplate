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

class ReactPanelContentBase  extends React.Component {  
  shouldComponentUpdate(nextprops, nextstate) {    
    return true;
  }
  closePanels() {
    this.props.actions.reactPanel.closePanels();
  }
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

      overlay = <div className="react-panel-content-click-overlay" onClick={this.closePanels.bind(this)}>&nbsp;</div>
    }    
      return (
        <div className={classValue} >
          {this.props.children}
          {overlay}
        </div>
      );
    }
  }

export let ReactPanelContent = connect(mapStateToProps, mapDispatchToProps)(ReactPanelContentBase)
 
export class ReactPanels extends React.Component {
    render() {
    
      return (
        <div className="react-panels">
          {this.props.children}
          
        </div>
      );
    }
  }

 export class  ReactPanelLeft extends React.Component {
    render() {
      return (
        <div className='react-panel react-panel-left'>
          {this.props.children}
        </div>
      );
    }
  }

export class ReactPanelRight extends React.Component {
    render() {
      return (
        <div className='react-panel react-panel-right'>
        {this.props.children}
        </div>
      );
    }
  }