const mongoose = require('mongoose');

const { Schema } = mongoose;

const Course = new Schema({
    name: { type: String, default: '', maxLength: 255 }, // String is shorthand for {type: String}
    desription: { type: String, default: '', maxLength: 510 },
    image: { type: String, default: '', maxLength: 255 },
});

module.exports = mongoose.model('Course', Course);
