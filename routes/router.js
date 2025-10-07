const { Router } = require("express");
const router = Router();

const controller = require("../controllers/controller");

router.get("/posts", controller.getAllPosts);
router.get("/posts/:postId", controller.getPost);
router.post("/posts/create", controller.createPost);
router.delete("/posts/:postId"), controller.deletePost;
router.post("/posts/:postId", controller.createComment);
router.delete("/posts/:postId/:commentId", controller.deleteComment);

module.exports = router;
