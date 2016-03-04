var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('<!DOCTYPE html>'+
            '<html>'+
              '<head>'+
                '<title>Express</title>'+
                '<link rel="stylesheet" href="/stylesheets/style.css">'+
                "<script>document.write('<script src=\"http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js\"></' + 'script>')</script>" +
                "<script>console.log(new Date().getTime());</script>" +
              '</head>' +
            '</html>');
});


app.listen(3000, function () {
  console.log('Listening on port 3000.');
});