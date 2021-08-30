const newsController = require('../app/controllers/NewsController');
var express = require('express');
const route = require('.');
var router = express.Router();

router.use('/:slug', newsController.show);

router.use('/', newsController.index);

module.exports = router;
