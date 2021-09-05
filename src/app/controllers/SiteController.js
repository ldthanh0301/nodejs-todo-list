const Course = require('../models/Course');

class SiteController {
    // [GET] - /
    index(req, res) {
        // res.render('home');

        // vi du sư dung model return client json
        Course.find({}, function (err, courses) {
            if (!err) {
                res.render('home');
            } else {
                res.status(400).json({ err: 'lỗi' });
            }
        });
    }

    // [GET] /search
    search(req, res) {
        res.send('slug');
    }
}

module.exports = new SiteController();
