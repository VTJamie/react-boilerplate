import React from 'react'
import Header from './header/Header'
import {ReactPanelContent, ReactPanels, ReactPanelLeft, ReactPanelRight} from './panels/ReactPanels'
class App extends React.Component {
  render() {
    return (
        <div>        	
            <ReactPanels>
                <ReactPanelLeft>                    
                </ReactPanelLeft>
                <ReactPanelRight>                    
                </ReactPanelRight>
            </ReactPanels>
        	<ReactPanelContent>
            	<Header />
            	{this.props.children}
            </ReactPanelContent>
        </div>
    )
  }
}

export default App