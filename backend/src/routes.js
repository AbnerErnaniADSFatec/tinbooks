const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/LikeController');

routes.get('/', (req, res) => {
    return res.json({ message : 'Hello ' + req.query.name });
});

routes.post('/users', UserController.store);
routes.post('/users/:userId/likes', LikeController.store);
routes.post('/users/:userId/dislikes', DislikeController.store);

module.exports = routes;