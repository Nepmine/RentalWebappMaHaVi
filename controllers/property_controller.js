const asyncHandler = require("express-async-handler");

// ------ Prisma ----------------------------
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



const getAllProperties = asyncHandler(async (req, res) => {
    console.log("getAllProperties called !")
    res.status(200).send("Property of all users [{...}]")
})

const setAllProperties = asyncHandler(async (req, res) => {
    console.log("setAllProperties called !")
    const name = 'Suraj Ghimire'
    const callPrisma = await prisma.properties.create({
        data: {
            name: "Suraj Ghimire"
        }
    })
    res.status(200).send("Property of all users [{...}]")
})

module.exports = { getAllProperties, setAllProperties }