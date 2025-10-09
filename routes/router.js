const { Router } = require("express");
const router = Router();

const {
    getAllPosts,
    getPost,
    createPost,
    deletePost,
    editPost,
    createComment,
    deleteComment,
    editComment,
} = require("../controllers/dbController");
const { login, authenticate } = require("../controllers/authController");

router.get("/posts", getAllPosts);
router.get("/posts/:postId", getPost);
router.post("/posts", authenticate, createPost);
router.delete("/posts/:postId", authenticate, deletePost);
router.put("/posts/:postId", authenticate, editPost);
router.post("/posts/:postId/comments", authenticate, createComment);
router.delete(
    "/posts/:postId/comments/:commentId",
    authenticate,
    deleteComment
);
router.put("/posts/:postId/comments/:commentId", authenticate, editComment);

router.post("/login", login);

module.exports = router;
