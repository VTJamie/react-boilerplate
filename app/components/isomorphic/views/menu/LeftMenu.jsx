import React from 'react'
import {ReactPanelLeft} from '../../modules/panels/ReactPanels'
import { connect } from 'react-redux'
import reactPanelService from '../../services/react-panel-service'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

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

class LeftMenu extends ReactPanelLeft {
    toggleLeftPanel() {
        this.props.actions.reactPanel.toggleLeftPanel();
      }
  render() {
    return (
      <ul className="nav codehero-menu nav-pills nav-stacked">
        <li>
            <Link onClick={this.toggleLeftPanel.bind(this)} to="/">Home</Link>
        </li>
        <li>
            <Link onClick={this.toggleLeftPanel.bind(this)} to="/todo">Todo</Link>
        </li>
        <li>
            <Link onClick={this.toggleLeftPanel.bind(this)} to="/about">About</Link>
        </li>
      </ul>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu)