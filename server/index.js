const express = require("express");
const app = express();
const db = require("./model/db");
db()
const cors = require("cors");
app.use(cors());
app.use(express.json());
const authRoutes = require("./Routes/AuthRouter");
const PostRouter = require("./Routes/PostsRouter");
const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next()
};
app.use(requestLogger);
app.use("/auth", authRoutes);
app.use("/products", PostRouter);

app.listen(5000, () => {
  console.log("server is started...");
});
