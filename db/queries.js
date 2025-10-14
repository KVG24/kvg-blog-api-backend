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

async function createPost(title, description, content, published) {
    return await prisma.post.create({
        data: {
            title,
            description,
            content,
            published,
        },
    });
}

async function deletePost(id) {
    return await prisma.post.delete({
        where: {
            id,
        },
    });
}

async function editPost(id, title, description, content, published) {
    return await prisma.post.update({
        where: {
            id,
        },
        data: {
            title,
            description,
            content,
            published,
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
    return await prisma.comment.delete({
        where: {
            id,
        },
    });
}

async function editComment(id, text) {
    return await prisma.comment.update({
        where: {
            id,
        },
        data: {
            text,
        },
    });
}

async function getUserByUsername(username) {
    return await prisma.user.findUnique({
        where: {
            username,
        },
    });
}

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    deletePost,
    editPost,
    createComment,
    deleteComment,
    editComment,
    getUserByUsername,
};
