const meController = require('../app/controllers/MeController');
var express = require('express');
const route = require('.');
var router = express.Router();

router.get('/create', meController.create);

router.post('/store', meController.store);

router.get('/courses', meController.index);

router.get('/:slug', meController.show);

module.exports = router;
