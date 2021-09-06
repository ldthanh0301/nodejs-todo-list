const meController = require('../app/controllers/MeController');
var express = require('express');
const route = require('.');
var router = express.Router();

router.get('/stored/bin', meController.show);
router.get('/stored/courses', meController.index);

module.exports = router;
