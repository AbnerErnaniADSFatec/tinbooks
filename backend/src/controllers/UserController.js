const axios = require('axios');
const User = require('../models/User');
module.exports = {
    async index(req, res) {
        const { user } = req.query;
        const loggedUser = await User.findById(user);
        const users = await User.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedUser.likes } },
                { _id: { $nin: loggedUser.dislikes } }
            ]
        });
        console.log(loggedUser.name);
        return res.json(users);
    },
    async find(req, res) {
        const { user } = req.query;
        const loggedUser = await User.findOne({ username : user});
        console.log(loggedUser.name);
        return res.json(loggedUser);
    },
    async store(req, res) {
        const { name, birth, sex, username, email, password, bio, location } = req.body;
        const userExist = await User.findOne({ email: email });
        if (userExist) { return res.json(userExist); }
        const user = await User.create({
            name,
            birth,
            sex,
            username,
            email,
            password,
            bio,
            location
        });
        return res.json(user);
    }
};