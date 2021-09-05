const { json } = require('express');
const Course = require('../models/Course');

class CourseController {
    // [GET] - /me/courses - show list courses
    index(req, res, next) {
        Course.find({})
            .lean()
            .then((courses) => {
                res.render('me/courses', { courses: courses });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
