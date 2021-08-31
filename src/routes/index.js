var express = require('express');
var newsRoute = require('./news');
var siteRoute = require('./site');
var courseRoute = require('./course');

function route(app) {
    app.get('/list-item', (req, res) => {
        res.render('list-item');
    });

    app.use('/course', courseRoute);

    app.use('/news', newsRoute);

    app.use('/home', siteRoute);

    app.use('/', siteRoute);
}

module.exports = route;
