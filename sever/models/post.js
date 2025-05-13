const db = require('../config/db');

// INSERT a new post
function createPost(title, body, callback) {
  const sql = 'INSERT INTO posts (title, body) VALUES (?, ?)';
  db.query(sql, [title, body], callback);
}

// SELECT all posts
function getAllPosts(callback) {
  const sql = 'SELECT * FROM posts ORDER BY createdAt DESC';
  db.query(sql, callback);
}

module.exports = {
  createPost,
  getAllPosts
};
