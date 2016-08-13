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
    return <header className="navbar navbar-container navbar-static-top navbar-default">
                    <div className="row">
                        <div className="col-xs-3">
                            <button type="button" className="pull-left panel-toggle" onClick={this.toggleLeftPanel.bind(this)}>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <h1 className="col-xs-6 navbar-brand text-center">Playground</h1>
                        <div className="col-xs-3">
                        </div>
                    </div>
         </header>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)