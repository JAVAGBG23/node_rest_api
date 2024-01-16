const BlogPost = require("../models/blogPost");

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
  const blogPost = req.blogPost;
  blogPost.title = req.body.title;
  blogPost.content = req.body.content;
  blogPost.save((err, data) => {
    if (err) {
      return res.status(400).json({ message: "Error updating blog post" });
    }
    res.json(data);
  });
};

// PARAM
exports.blogPostById = async (req, res) => {
  BlogPost.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json({ message: "Error" });
    }
    req.data = data;
    next();
  });
};

//GET blogpost by specific id
exports.read = async (req, res) => {
  return res.json(req.blogPost);
};
