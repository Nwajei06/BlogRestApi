const express = require('express');
const router = express.Router();
const { getAllPosts } = require('../models/post'); // Use the MySQL model function

// Home page route
router.get('', (req, res) => {
  const locals = {
    title: "NodeJs Blog",
    description: "Simple Blog created with NodeJs, Express & MySQL"
  };

  getAllPosts((err, data) => {
    if (err) {
      console.error("Error fetching posts:", err);
      return res.status(500).send("Database error");
    }

    res.render("index", { locals, data });
  }); 
});

// About page
router.get('/about', (req, res) => {
  res.render("about");
});

// Home route (can remove if redundant with '/')
router.get('/home', (req, res) => {
  res.render("home");
});

module.exports = router;
