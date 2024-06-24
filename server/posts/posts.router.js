const express = require('express');
const { fetchPosts } = require('./posts.service');
const { fetchUserById } = require('../users/users.service');
const axios = require('axios');

const router = express.Router();


router.get('/', async (req, res) => {
  const posts = await fetchPosts();

  const postsWithImages = await Promise.all(posts.map(async post => {
    const { data: images } = await axios.get(`https://jsonplaceholder.typicode.com/albums/${post.id}/photos`);
    return {
      ...post,
      images: images.map(image => ({ url: image.url })), 
    };
  }));

  res.json(postsWithImages);
});



module.exports = router;
