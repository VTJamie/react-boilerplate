import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { match, RouterContext, browserHistory } from 'react-router'
import routes from '../isomorphic/routes/routes'
import store from '../isomorphic/store/store'

export default (expressapp) => {
    expressapp.get('*', function(req, res) {
        match({ routes: routes, location: req.url }, (err, redirect, props) => {  
            if (props) {
                const html = renderToString((
                    <Provider store={store}>
                        <RouterContext {...props} />
                    </Provider>
                ));
                res.render('index', {
                    react: html,
                    livereload: "<script>document.write('<script src=\"http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js\"></' + 'script>')</script>"
                });
            }  
        })

    });
}