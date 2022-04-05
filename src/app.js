const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || 3000;

//SETTINGS
app.set('port', PORT);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ROUTES
app.use(require('./routes/index'));

//STATIC (directorio public)
app.use(express.static(path.join(__dirname, 'public')));

//404 HANDLER
app.use((req, res, next) => {
    res.status(404).send('404 Not found');
});

module.exports = app;
