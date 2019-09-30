const User = require('../models/User');
module.exports = {
    async store(req, res) {
        console.log(req.params.UserId);
        console.log(req.headers.user);
        const { UserId } = req.params;
        const { user } = req.headers;
        const loggedUser = await User.findById(user);
        const targetUser = await User.findById(UserId);
        if (!targetUser) {
            return res.status(400).json({ error : 'User not exists' });
        }
        loggedUser.dislikes.push(targetUser._id);
        await loggedUser.save();
        return res.json(loggedUser);
    }
}; 