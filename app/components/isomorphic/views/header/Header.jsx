import React from 'react'
import { connect } from 'react-redux'
import reactPanelService from '../../services/react-panel-service'
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

class Header extends React.Component {
  toggleLeftPanel() {    
    this.props.actions.reactPanel.toggleLeftPanel();
  }
  toggleRightPanel() {
    this.props.actions.reactPanel.toggleRightPanel();
  }
  render() {
    return <header className="navbar navbar-container navbar-default">
			<a href="#"  onClick={this.toggleLeftPanel.bind(this)}><span className="box-shadow-menu"></span></a>
            <h1 className="navbar-brand">Playground</h1>
        </header>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)