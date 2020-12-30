const { validationResult } = require('express-validator');
const axios = require('axios');
const config = require('config');
const Post = require('../models/post');
const Profile = require('../models/profile');
const User = require('../models/user');
const user = require('../models/user');

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().sort('-date');
    res.status(200).json({ posts });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.post_id);
    if (!post) return res.status(400).json({ msg: 'Post not found' });

    res.status(200).json({ post });
  } catch (err) {
    if (err.kind === 'ObjectId')
      return res.status(400).json({ msg: 'Post not found' });
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.creatPost = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({
      error: errors.array(),
    });

  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(400).json({ msg: 'User not found' });

    const post = new Post({
      text: req.body.text,
      name: user.name,
      userId: req.user.id,
      avatar: user.avatar,
    });

    await post.save();
    res.status(200).json({ post });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.post_id);
    if (!post) return res.status(400).json({ msg: 'Post not found' });

    // check if a users are deleteing their own posts
    if (post.userId.toString() !== req.user.id)
      return res.status(401).json({ msg: 'Can not delete post' });

    post.remove();
    res.status(200).json({ msg: 'Post successfully deleted' });
  } catch (err) {
    if (err.kind === 'ObjectId')
      return res.status(400).json({ msg: 'Post not found' });
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.addLike = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.post_id);
    if (!post) return res.status(400).json({ msg: 'Post not found' });

    // make user post to be liked only once
    const likedArr = post.likes.filter(
      (like) => like.userId.toString() === req.user.id
    );
    if (likedArr.length > 0)
      return res.status(400).json({ msg: 'Can not like more than one' });

    post.likes.unshift({ userId: req.user.id });
    await post.save();

    res.status(200).json(post.likes[0]);
  } catch (err) {
    if (err.kind === 'ObjectId')
      return res.status(400).json({ msg: 'Post not found' });
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.removeLike = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.post_id);
    if (!post) return res.status(400).json({ msg: 'Post not found' });

    const likedArr = post.likes.filter(
      (like) => like.userId.toString() === req.user.id
    );
    if (likedArr.length === 0)
      return res.status(400).json({ msg: 'Post has not yet been liked' });

    const newLikes = post.likes.filter(
      (like) => like.userId.toString() !== req.user.id
    );
    post.likes = newLikes;

    await post.save();

    res.status(200).json(post.likes);
  } catch (err) {
    if (err.kind === 'ObjectId')
      return res.status(400).json({ msg: 'Post not found' });
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.addComment = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({
      error: errors.array(),
    });

  try {
    const post = await Post.findById(req.params.post_id);
    if (!post) return res.status(400).json({ msg: 'User not found' });

    const comment = {
      text: req.body.text,
      name: user.name,
      userId: req.user.id,
      avatar: user.avatar,
    };

    post.comments.unshift(comment);
    await post.save();

    res.status(200).json(post.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteComment = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.post_id);
    if (!post) return res.status(400).json({ msg: 'Post not found' });
    console.log(post);

    const comment = post.comments.find(
      (c) => c._id.toString() === req.params.comment_id
    );
    if (!comment) return res.status(400).json({ msg: 'Comment not found' });

    if (req.user.id !== comment.userId)
      return res.status(401).json({ msg: 'Can not delete comment' });

    const newComment = post.comments.filter(
      (c) => c._id.toString() !== req.params.comment_id
    );
    post.comments = newComment;

    await post.save();

    res.status(200).json(post.comments);
  } catch (err) {
    if (err.kind === 'ObjectId')
      return res.status(400).json({ msg: 'Post not found' });
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
