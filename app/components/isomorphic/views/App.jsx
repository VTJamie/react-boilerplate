import React from 'react'
import Header from './header/Header'
import {ReactPanelContent, ReactPanels} from '../modules/panels/ReactPanels'
import LeftMenu from './menu/LeftMenu'
class App extends React.Component {
  render() {
    return (
        <div>        	
            <ReactPanels>
                <LeftMenu>
                </LeftMenu>
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