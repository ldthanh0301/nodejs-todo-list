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

    // [GET] - /me/courses/create
    create(req, res, next) {
        // trả  về view /courses/create
        res.render('courses/create');
    }

    // [POST] - /me/courses/store
    store(req, res, next) {
        Course.create(
            {
                name: req.body.name,
                desription: req.body.desription,
                image: req.body.image,
            },
            function (err) {
                if (!err) {
                    // trả về view /courses/index
                    res.redirect('/me/course');
                } else {
                    console.log(err);

                    next(err);
                }
            },
        );
    }

    // [GET] - /me/course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .lean()
            .then((course) => {
                if (course)
                    res.render('courses/show', {
                        course,
                    });
                else {
                    res.json({
                        error: 'Khóa học không tồn tại',
                    });
                }
            })
            .catch(next);
    }
}

module.exports = new CourseController();
