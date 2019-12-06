const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
    image: {
        type: Object,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    bio: [{
        type: String,
        required: true
    }]
});

module.exports = model('Book', BookSchema);