const express = require('express');
const path = require('path');

// call express
const app = express();

// initialize the public folder
app.use(express.static(path.join(__dirname, 'public')));

// initialize the views folder
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// initialize the routes
app.use('/', require('./routes/menu'));
app.use('/', require('./routes/order'));
app.use('/', require('./routes/admin'));


// export the express app for server
module.exports = app;