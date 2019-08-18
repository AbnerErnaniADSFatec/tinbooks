const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const server = express();

// mongoose.connect('link-mongoDB', {
//     useNewUrlParser: true
// });

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(1524);