const { Router } = require("express");
const router = Router();

const controller = require("../controllers/controller");

router.get("/posts", controller.getAllPosts);
router.get("/posts/:postId", controller.getPost);
router.post("/posts", controller.createPost);
router.delete("/posts/:postId", controller.deletePost);
router.put("/posts/:postId", controller.editPost);
router.post("/posts/:postId/comments", controller.createComment);
router.delete("/posts/:postId/comments/:commentId", controller.deleteComment);
router.put("/posts/:postId/comments/:commentId", controller.editComment);

module.exports = router;
