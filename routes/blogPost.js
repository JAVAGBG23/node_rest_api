const express = require("express");
const router = express.Router();

// controller methods
const { create, getAll, update } = require("../controllers/blogPost");

// POST create post
router.post("/blogpost", create);

// GET get all posts
router.get("/blogposts", getAll);

// PUT update blog post
router.put("/blogpost/:postId", update);

// GET specific blogpost based on id

module.exports = router;
