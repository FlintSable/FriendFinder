// dependencies
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const app = express();

var port = process.env.PORT || 8080;
// middleware setup
// static
app.use(express.static('public'));

// what does this one do again
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride('_method'));
// templating engine that we are going to use
var exphbs = require('express-handlebars');
// handlebars view engine setup
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/burger_controller.js');
app.use('/', routes);
app.listen(port);