const newsController = require('../app/controllers/NewsController');
var express = require('express');
const route = require('.');
var router = express.Router();

router.get('/:slug', newsController.show);

router.get('/', newsController.index);

module.exports = router;
