const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

async function getAllPosts() {
    return await prisma.post.findMany();
}

async function getPost(id) {
    return await prisma.post.findUnique({
        where: {
            id,
        },
        include: {
            comments: true,
        },
    });
}

async function createPost(title, content, published) {
    return await prisma.post.create({
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
    return await prisma.comment.create({
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
