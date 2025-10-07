const { PrismaClient } = require("../generated/prisma");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const prisma = new PrismaClient();

async function populateUser() {
    const password = await bcrypt.hash(process.env.USER_PASSWORD, 10);

    try {
        await prisma.user.create({
            data: {
                username: process.env.USER_NAME,
                password: password,
            },
        });
        console.log("User created successfully!");
    } catch (error) {
        console.error("Failed to create user:", error);
    } finally {
        await prisma.$disconnect();
    }
}

populateUser();
