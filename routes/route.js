const { Router } = require('express');
const controller = require('../controllers/controller');

const routemanger = Router();

routemanger.get('/posts', controller.getPosts);

routemanger.get('/comments', controller.getComments);

module.exports = routemanger;
