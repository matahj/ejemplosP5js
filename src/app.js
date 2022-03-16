const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

//SETTINGS
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//ROUTES
app.use(require('./routes/index'));

//STATIC (directorio public)
app.use(express.static(path.join(__dirname, 'public')));

//404 HANDLER
app.use((req, res, next) => {
    //res.status(404).send('404 Not found');
    res.status(400).render('sk/404.ejs');
});

module.exports = app;