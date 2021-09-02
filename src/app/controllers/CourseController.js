const { json } = require('express');
const Course = require('../models/Course');

class CourseController {
    // [GET] - /course
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

    // [GET] - /course/create
    create(req, res, next) {
        // trả  về view /courses/create
        res.render('courses/create');
    }

    // [POST] - /course/store
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
                    res.redirect('/course');
                } else {
                    console.log(err);

                    next(err);
                }
            },
        );
    }

    // [GET] - /course/:slug
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
