const express = require("express");
const router = express.Router();

// controller methods
const { create } = require("../controllers/blogPost");

// POST create post
router.post("/blogpost", create);

module.exports = router;
