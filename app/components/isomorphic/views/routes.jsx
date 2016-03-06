import React from 'react'
import { Route, Link, IndexRoute } from 'react-router'
import App from './App'
import Home from './pages/home/Home'

export default
<Route path="/" component={App}>
    <IndexRoute component={Home} />
</Route>
