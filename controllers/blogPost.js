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
