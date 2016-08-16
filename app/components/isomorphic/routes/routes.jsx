import React from 'react'
import { Route, Link, IndexRoute } from 'react-router'
import App from '../views/App'
import Home from '../views/pages/home/Home'
import About from '../views/pages/about/About'
import Todo from '../views/pages/todo/Todo'

export default (

<Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/todo" component={Todo} />
    <Route path="/about" component={About} />
</Route>

)
