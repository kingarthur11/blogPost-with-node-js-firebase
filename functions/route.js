const express = require('express');

const blogController = require('./controller');

const router = express.Router();

 router.get('/getBlog/:id', blogController.getOnePost);

 router.get('/getAllBlog', blogController.getAllBlog);

router.post('/postBlog', blogController.postBlog);

exports.routes = router;

