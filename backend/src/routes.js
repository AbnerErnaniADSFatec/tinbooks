const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello ' + req.query.name });
});

routes.get('/users', UserController.index);
routes.get('/find', UserController.find);
routes.post('/users', UserController.store);
routes.post('/users/likes', LikeController.store);
routes.post('/users/dislikes', DislikeController.store);

module.exports = routes;