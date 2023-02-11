const express = require('express');
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const bodyParser = require('body-parser')

//Body Parser-middleware
app.use(express.urlencoded({ extended: true }));  
app.use(express.json());
app.use(bodyParser.json())

// init database
require('./db/mongoose');

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/../views'));
// set layout
app.use(ejsLayouts);
app.set('layout', 'layouts/main');

// middleware
app.use('/', require('./middleware/view-variables'));

// mount routes
app.use(require('./routes/web'));

module.exports = app;