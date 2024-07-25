const {
  getItems,
  postItems,
  deleteItems,
  updateItems,
} = require("../controllers/PostsController");

const PostRouter = require("express").Router();

PostRouter.get("/:id", getItems);
PostRouter.post("/", postItems);
PostRouter.put("/:id", updateItems);
PostRouter.delete("/:id", deleteItems);

module.exports = PostRouter;
