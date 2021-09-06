const courseController = require('../app/controllers/CourseController');
var express = require('express');
const route = require('.');
var router = express.Router();

router.get('/create', courseController.create);

router.get('/:id/edit', courseController.edit);

router.patch('/:id/restore', courseController.restore);

router.delete('/:id/force', courseController.force);

router.delete('/:id', courseController.delete);

router.put('/:id', courseController.update);

router.post('/store', courseController.store);

router.get('/:slug', courseController.show);

router.get('/', courseController.index);

module.exports = router;
