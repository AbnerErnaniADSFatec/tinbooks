const User = require('../models/User');
module.exports = {
    async store(req, res) {
        console.log(req.body.logged);
        console.log(req.body.like);
        const { logged } = req.body;
        const { like } = req.body;
        const loggedUser = await User.findById(logged);
        const targetUser = await User.findById(like);
        if (!targetUser) {
            return res.status(400).json({ error: 'User not exists' });
        }
        if (targetUser.likes.includes(loggedUser._id)) {
            console.log('DEU MATCH');
        }
        loggedUser.likes.push(targetUser._id);
        await loggedUser.save();
        return res.json(loggedUser);
    }
};