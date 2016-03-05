import React from 'react'
import { renderToString } from 'react-dom/server'
import App  from '../views/App'

export default (expressapp) => {
    expressapp.get('/', function(req, res) {
        res.render('index', {react: renderToString(<App />), livereload: "<script>document.write('<script src=\"http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js\"></' + 'script>')</script>"});
    });
}