import React from 'react'
import Header from './header/Header'
import {ReactPanelContent, ReactPanels, ReactPanelLeft, ReactPanelRight} from './panels/ReactPanels'

export default React.createClass({
  render() {
    return (
        <div>        	
            <ReactPanels>
                <ReactPanelLeft>
                    Left Panel!
                </ReactPanelLeft>
                <ReactPanelRight>
                    Right Panel!
                </ReactPanelRight>
            </ReactPanels>
        	<ReactPanelContent>
            	<Header />
            	{this.props.children}
            </ReactPanelContent>
        </div>
    )
  }
})