const Course = require('../models/Course');

class CourseController {
    // [GET] - /course
    index(req, res, next) {
        Course.find({})
            .lean()
            .then((courses) => {
                //  test
                // courses = courses.map(data => {
                //     // console.log(typeof data)
                //     // console.log(typeof data.toObject())
                //     return data.toObject()
                // })
                res.render('courses/course', { courses: courses });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
