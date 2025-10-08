const db = require("../db/queries");

async function getAllPosts(req, res) {
    try {
        const posts = await db.getAllPosts();
        res.status(200).json(posts);
    } catch (err) {
        console.error("Error fetching posts: " + err);
        res.status(500).json({ error: "Error fetching posts" });
    }
}

async function getPost(req, res) {
    try {
        const post = await db.getPost(Number(req.params.postId));
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.status(200).json(post);
    } catch (err) {
        console.error("Error fetching post: " + err);
        res.status(500).json({ error: "Error fetching post" });
    }
}

async function createPost(req, res) {
    try {
        const { title, content, published } = req.body;
        const newPost = await db.createPost(title, content, published);
        res.status(201).json(newPost);
    } catch (err) {
        console.log("Error creating post: " + err);
        res.status(500).json({ error: "Error creating post" });
    }
}

async function deletePost(req, res) {
    try {
        const deletedPost = await db.deletePost(Number(req.params.postId));
        res.status(200).json(deletedPost);
    } catch (err) {
        // Prisma "not found" code
        console.error("Error deleting post: " + err);
        if (err.code === "P2025") {
            return res.status(404).json({ error: "Post not found" });
        }
        res.status(500).json({ error: "Error deleting post" });
    }
}

async function createComment(req, res) {
    try {
        const { creator, text } = req.body;
        const newComment = await db.createComment(
            creator,
            text,
            req.params.postId
        );
        res.status(201).json(newComment);
    } catch (err) {
        console.error("Error creating comment: " + err);
        res.status(500).json({ error: "Error creating comment" });
    }
}

async function deleteComment(req, res) {
    try {
        const deletedComment = await db.deleteComment(
            Number(req.params.commentId)
        );
        res.status(200).json(deletedComment);
    } catch (err) {
        // Prisma "not found" code
        if (err.code === "P2025") {
            return res.status(404).json({ error: "Comment not found" });
        }
        console.error("Error deleting comment: " + err);
        res.status(500).json({ error: "Error deleting comment" });
    }
}

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    deletePost,
    createComment,
    deleteComment,
};
