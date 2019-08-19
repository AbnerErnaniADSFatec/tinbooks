const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: [{
        type: String,
        required: true
    }],
    location: {
        lat: {
            type: Number,
            required: true
        },
        long: {
            type: Number,
            required: true
        }
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = model('User', UserSchema);