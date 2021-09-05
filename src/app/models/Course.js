const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
var mongoose_delete = require('mongoose-delete');

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
// Chỉ định trường id của document
Course.path('_id');

// Add plugin
mongoose.plugin(slug);
Course.plugin(mongoose_delete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);
