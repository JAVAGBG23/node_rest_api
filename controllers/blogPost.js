const BlogPost = require("../models/blogPost");

// PARAM
exports.postById = (req, res, next, id) => {
  BlogPost.findById(id).exec((err, post) => {
    if (err || !post) {
      return res.status(400).json({
        message: "Post does not exist",
      });
    }
    req.post = post;
    next();
  });
};

exports.read = (req, res) => {
  return res.json(req.post);
};

exports.create = async (req, res) => {
  try {
    const blogPost = await new BlogPost({
      title: req.body.title,
      postedBy: req.body.postedBy,
      ...req.body,
    }).save();
    res.json(blogPost);
  } catch (err) {
    console.log(err);
    return res.status(400).send("BlogPost creation failed");
  }
};

exports.getAll = async (req, res) => {
  const allBlogPosts = await BlogPost.find({}).sort({ createdAt: 1 }).exec();
  res.json(allBlogPosts);
};

exports.update = async (req, res) => {
  const post = req.post;
  post.title = req.body.title;
  post.content = req.body.content;
  post.save((err, data) => {
    if (err) {
      return res.status(400).json({ message: "error" });
    }
    res.json(data);
  });
};

exports.remove = async (req, res) => {
  const post = req.post;
  post.remove((err, data) => {
    if (err) {
      return res.status(400).json({ message: "error" });
    }
    res.json({
      message: "Post deleted",
    });
  });
};
