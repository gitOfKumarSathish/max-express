const express = require('express');
const { getPosts, createPost } = require('../controllers/feed');


const router = express.Router();
router
    .get('/posts', getPosts)
    .post('/post', createPost);

module.exports = router;