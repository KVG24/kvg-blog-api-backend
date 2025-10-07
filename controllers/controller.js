const db = require("../db/queries");

async function getAllPosts(req, res, next) {
    try {
        const posts = await db.getAllPosts();
        res.json(posts);
    } catch (err) {
        console.log("Error fetching posts: " + err);
        next(err);
    }
}

async function getPost(req, res, next) {
    try {
        const post = await db.getPost(Number(req.params.postId));
        res.json(post);
    } catch (err) {
        console.log("Error fetching post: " + err);
        next(err);
    }
}

async function createPost(req, res, next) {
    try {
        const { title, content, published } = req.body;
        await db.createPost(title, content, published);
    } catch (err) {
        console.log("Error creating post: " + err);
        next(err);
    }
}

async function deletePost(req, res, next) {
    try {
        await db.deletePost(Number(req.params.postId));
    } catch (err) {
        console.log("Error deleting comment: " + err);
        next(err);
    }
}

async function createComment(req, res, next) {
    try {
        const { creator, text } = req.body;
        await db.createComment(creator, text, req.params.postId);
    } catch (err) {
        console.log("Error creating comment: " + err);
        next(err);
    }
}

async function deleteComment(req, res, next) {
    try {
        await db.deleteComment(req.params.commentId);
    } catch (err) {
        console.log("Error deleting comment: " + err);
        next(err);
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
