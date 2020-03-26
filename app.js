const express = require('express');
const app = express();
var methodOverride = require('method-override');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/', routes);
module.exports = app;