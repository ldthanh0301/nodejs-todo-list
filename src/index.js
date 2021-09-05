const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');

const route = require('./routes');
const db = require('./app/config/db');

const app = express();
const port = 3000;

// connect db
db.connect();

// Khởi tạo handlebars
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: function (a, b) {
                return a + b;
            },
        },
    }),
);
//sư dụng để chuyển formdate thành req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sử dụng override method url ?_method=''
app.use(methodOverride('_method'));

//  sử dụng view engine là hanlderbars
app.set('view engine', 'hbs');

// Chỉnh lại thu mục views cho đúng vối cấu trúc dự án
app.set('views', path.join(__dirname, 'resources/views'));

// sử dụng morgan để hiển thị các logger
// app.use(morgan('combined'))

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
