const axios = require('axios');
const User = require('../models/User');
module.exports = {
    async store(req, res) {
        const { name, email: emailUser, password, bio, location } = req.body;
        const userExist = await User.findOne({ email: emailUser });
        if (userExist) { return res.json(userExist); }
        const User = await User.create({
            name,
            emailUser,
            password,
            bio,
            location
        });
        return res.json(User);
    }
};