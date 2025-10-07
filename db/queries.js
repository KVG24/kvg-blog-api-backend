const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

async function getAllPosts() {
    const posts = await prisma.post.findMany();
    return posts;
}

async function getPost(id) {
    const post = await prisma.post.findUnique({
        where: {
            id,
        },
        include: {
            comments: true,
        },
    });
    return post;
}

async function createPost(title, content, published) {
    await prisma.post.create({
        data: {
            title,
            content,
            published,
        },
    });
}

async function deletePost(id) {
    await prisma.post.delete({
        where: {
            id,
        },
    });
}

async function createComment(creator, text, postId) {
    await prisma.comment.create({
        data: {
            creator,
            text,
            postId,
        },
    });
}

async function deleteComment(id) {
    await prisma.comment.delete({
        where: {
            id,
        },
    });
}

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    deletePost,
    createComment,
    deleteComment,
};
