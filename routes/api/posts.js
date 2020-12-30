const express = require('express');
const { check } = require('express-validator');
const checkAuth = require('../../middleware/auth');
const postController = require('../../controllers/posts');

const router = express.Router();

// GET /api/posts
router.get('/', checkAuth, postController.getAllPosts);

// GET /api/posts/:post_id
router.get('/:post_id', checkAuth, postController.getPostById);

// POST /api/posts
router.post(
  '/',
  checkAuth,
  [check('text', 'Text is required').notEmpty()],
  postController.creatPost
);

// DELETE /api/posts/:post_id
router.delete('/:post_id', checkAuth, postController.deletePost);

// PUT /api/posts/like/:post_id
router.put('/like/:post_id', checkAuth, postController.addLike);

// DELETE /api/posts/unlike/:post_id
router.delete('/unlike/:post_id', checkAuth, postController.removeLike);

// POST /api/posts/comments/:post_id
router.post(
  '/comments/:post_id',
  checkAuth,
  [check('text', 'Text is required').notEmpty()],
  postController.addComment
);

// DELETE /api/posts/comments/:post_id/:comment_id
router.delete(
  '/comments/:post_id/:comment_id',
  checkAuth,
  postController.deleteComment
);

module.exports = router;
