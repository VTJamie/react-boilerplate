import React from 'react'
import ReactDOM from 'react-dom'

import { Router, browserHistory } from 'react-router'
import routes from '../isomorphic/routes/routes'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore((state, action) => {
    console.log(state, action);
});

ReactDOM.render(
(
  <Provider store={store}>
<Router routes={routes} history={browserHistory}/>
</Provider>
), document.getElementById('react-root'));

