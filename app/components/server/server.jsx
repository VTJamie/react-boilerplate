import express from 'express'
import reactentry from './react-entry'

var app = express();

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.use('/static', express.static(__dirname + '/public'));

reactentry(app);

app.listen(3000, function () {
  console.log('Listening on port 3000.');
});