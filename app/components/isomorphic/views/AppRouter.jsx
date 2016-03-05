import React from 'react'
import { Router, Route, Link, IndexRoute } from 'react-router'
import BrowserHistory from 'react-router/lib/BrowserHistory'
import App from './App'
import Home from './pages/home/Home'


export default React.createClass({
    render() {
        return (
        <Router history={new BrowserHistory()}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                </Route>
        </Router>
        )
    }
})