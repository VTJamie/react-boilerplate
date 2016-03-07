import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import routes from '../isomorphic/routes/routes'
import store from '../isomorphic/store/store'

ReactDOM.render(
(
  <Provider store={store}>
<Router routes={routes} history={browserHistory}/>
</Provider>
), document.getElementById('react-root'));

