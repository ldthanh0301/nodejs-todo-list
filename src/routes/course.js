const courseController = require('../app/controllers/CourseController');
var express = require('express');
const route = require('.');
var router = express.Router();

// router.use('/:slug', coursesController.show);

router.use('/', courseController.index);

module.exports = router;
