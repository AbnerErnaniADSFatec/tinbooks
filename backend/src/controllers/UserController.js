const axios = require('axios');
const User = require('../models/User');
module.exports = {
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