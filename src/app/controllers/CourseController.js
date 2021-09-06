const { json } = require('express');
const Course = require('../models/Course');
const slugify = require('slugify');
class CourseController {
    // [GET] - /courses
    index(req, res, next) {
        Course.find({})
            .lean()
            .then((courses) => {
                //  hàm khi mà handlerbar bị lỗi do truyền vào đối tượng không thể truy câp
                //  nhưng phần này được thay thế bằng hàm .lean() ở trên
                // courses = courses.map(data => {
                //     // console.log(typeof data)
                //     // console.log(typeof data.toObject())
                //     return data.toObject()
                // })

                // trả về view /courses/index
                res.render('courses', { courses: courses });
            })
            .catch(next);
    }

    // [GET] - /courses/create
    create(req, res, next) {
        // trả  về view /courses/create
        res.render('courses/create');
    }

    // [POST] - /courses/store
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
                    res.redirect('/courses');
                } else {
                    console.log(err);

                    next(err);
                }
            },
        );
    }

    // [GET] - /courses/:slug
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

    // [GET] - /courses/:id/edit
    edit(req, res, next) {
        // trả  về view /courses/edit

        Course.findById(req.params.id)
            .lean()
            .then((course) => {
                res.render('courses/edit', {
                    course,
                });
            });
    }
    // [PUT] - /courses/:id
    update(req, res, next) {
        Course.updateOne(
            { _id: req.params.id },
            {
                name: req.body.name,
                desription: req.body.desription,
                image: req.body.image,
                slug: slugify(req.body.name),
            },
        )
            .then(res.redirect('/me/stored/courses'))
            .catch(next);
    }

    // [DELETE] - /courses/:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then((message) => {
                res.redirect('back');
            })
            .catch(next);
    }

    // [PATCH] - /courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then((message) => {
                res.redirect('back');
            })
            .catch(next);
    }

    // [DELETE] - /courses/:id/force
    force(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then((message) => {
                res.redirect('back');
            })
            .catch(next);
    }
}

module.exports = new CourseController();
