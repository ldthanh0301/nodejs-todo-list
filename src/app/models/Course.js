const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const { Schema } = mongoose;

const Course = new Schema(
    {
        name: { type: String, default: '', maxLength: 255 }, // String is shorthand for {type: String}
        desription: { type: String, default: '', maxLength: 510 },
        image: { type: String, default: '', maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
