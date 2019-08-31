const axios = require('axios');
const User = require('../models/User');
module.exports = {
    async index(req, res) {
        const { user } = req.headers;
        const loggedUser = await User.findById(user);
        const users = await User.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedUser.likes } },
                { _id: { $nin: loggedUser.dislikes } }
            ]
        });
        return res.json(users);
    },
    async store(req, res) {
        const { name, email, password, bio, location } = req.body;
        const userExist = await User.findOne({ email: email });
        if (userExist) { return res.json(userExist); }
        const user = await User.create({
            name,
            email,
            password,
            bio,
            location
        });
        return res.json(user);
    }
};