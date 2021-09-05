const siteController = require('../app/controllers/SiteController');
var express = require('express');
const route = require('.');
var router = express.Router();

router.get('/search', siteController.search);

router.get('/', siteController.index);

module.exports = router;
