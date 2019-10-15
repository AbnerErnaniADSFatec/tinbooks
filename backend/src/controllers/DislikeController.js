const User = require('../models/User');
module.exports = {
    async store(req, res) {
        console.log(req.body.logged);
        console.log(req.body.dislike);
        const { logged } = req.body;
        const { dislike } = req.body;
        const loggedUser = await User.findById(logged);
        const targetUser = await User.findById(dislike);
        if (!targetUser) {
            return res.status(400).json({ error : 'User not exists' });
        }
        loggedUser.dislikes.push(targetUser._id);
        await loggedUser.save();
        return res.json(loggedUser);
    }
}; 