import React from 'react'
import { renderToString } from 'react-dom/server'
import AppRouter  from '../isomorphic/views/AppRouter'

export default (expressapp) => {
    expressapp.get('/', function(req, res) {
        res.render('index', {react: renderToString(<AppRouter />), livereload: "<script>document.write('<script src=\"http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js\"></' + 'script>')</script>"});
    });
}