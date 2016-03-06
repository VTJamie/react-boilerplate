import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from '../isomorphic/routes/routes'


import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore((state, action) => {
    console.log(state, action);
});

export default (expressapp) => {
    expressapp.get('*', function(req, res) {
        match({ routes: routes, location: req.url }, (err, redirect, props) => {
            res.render('index', {
                react: renderToString((
                <Provider store={store}>
                <RouterContext {...props}/>
                </Provider>
                )),
                livereload: "<script>document.write('<script src=\"http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js\"></' + 'script>')</script>"});
        })

    //    res.render('index', {react: renderToString(<AppRouter />), livereload: "<script>document.write('<script src=\"http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js\"></' + 'script>')</script>"});
    });
}