const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const notFoundMiddleware = require("./middleware/notFoundMiddleware");
const morgan = require("morgan");
const cors = require("cors");
const upload = require("./middleware/multerMiddleware");
const path = require('path');
connectDb();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());


//routes
app.use("/posts", postsRoutes);
app.use('media', express.static(path.join(__dirname, "media")));
//handler middlewares
app.use(notFoundMiddleware);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
