const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
require("dotenv").config();

// express
const app = express();

// connect to database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error", err));

// import routes
const blogPostRoutes = require("./routes/blogPost");

// middlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// route middleware
app.use("/api", blogPostRoutes);

// test route
app.get("/api/klarr/", (req, res) => {
  res.send("Hello from KLARR :)");
});

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
