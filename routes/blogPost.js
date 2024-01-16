const express = require("express");
const router = express.Router();

// controller methods
const { create, getAll } = require("../controllers/blogPost");

// POST create post
router.post("/blogpost", create);

// GET get all posts
router.get("/blogposts", getAll);

module.exports = router;
