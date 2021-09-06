const { json } = require('express');
const Course = require('../models/Course');

class CourseController {
    // [GET] - /me/stored/courses - show list courses
    index(req, res, next) {
        Course.find({})
            .lean()
            .then((courses) => {
                res.render('me/stored-courses', { courses });
            })
            .catch(next);
    }

    // [GET] - /me/stored/bin - show bin
    show(req, res, next) {
        Course.findDeleted()
            .lean()
            .then((courses) => {
                res.render('me/stored-bin', { courses });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
