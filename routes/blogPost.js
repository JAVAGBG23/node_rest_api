const express = require("express");
const router = express.Router();

// controller methods
const {
  create,
  getAll,
  update,
  read,
  postById,
  remove,
} = require("../controllers/blogPost");

// POST create post
router.post("/blogpost", create);

// GET get all posts
router.get("/blogposts", getAll);

// PUT update blog post
router.put("/blogpost/:blogPostId", update);

// GET specific blogpost based on id
router.get("/blogpost/:blogPostId", read);

// DELETE
router.delete("/blogpost/:blogPostId", remove);

// PARAM hjälper oss hämta specifikt id till vår request parameter
router.param("blogPostId", postById);

module.exports = router;
