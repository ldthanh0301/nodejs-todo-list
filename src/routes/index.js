var express = require('express');
var newsRoute = require('./news');
var siteRoute = require('./site');
var courseRoute = require('./course');
var meRoute = require('./me');

function route(app) {
    app.get('/list-item', (req, res) => {
        res.render('list-item');
    });

    app.use('/courses', courseRoute);

    app.use('/me', meRoute);

    app.use('/news', newsRoute);

    app.use('/', siteRoute);
}

module.exports = route;
