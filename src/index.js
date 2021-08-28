const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars  = require('express-handlebars')

const app = express()
const port = 3000

// Khởi tạo handlebars
app.engine('hbs', handlebars({
  extname: '.hbs'
}));

//  sử dụng view engine là hanlderbars
app.set('view engine', 'hbs')

// Chỉnh lại thu mục views cho đúng vối cấu trúc dự án
app.set('views',path.join(__dirname,'resources/views'))

// sử dụng morgan để hiển thị các logger 
app.use(morgan('combined'))

// set static folder 
app.use( express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})