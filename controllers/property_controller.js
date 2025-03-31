const asyncHandler = require("express-async-handler");

// ------ Prisma ----------------------------
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



const getAllProperties = asyncHandler(async (req, res) => {
    console.log("getAllProperties called !")
    res.status(200).send("Getting Property of all users [{...}]")
    await prisma.Owner.create({
        data: {
            name: "Owner1"
        }
    })
})

const setAllProperties = asyncHandler(async (req, res) => {
    console.log("setAllProperties called !")
    const name = 'Suraj Ghimire'
    const callPrisma = await prisma.property.create({
        data: {
            name: "Suraj Ghimire"
        }
    })
    res.status(200).send("Property of all users [{...}]")
})

const setProperty = asyncHandler(async (req, res) => {
    console.log("setAllProperties called !")
    const name = 'Suraj Ghimire'
    const callPrisma = await prisma.property.create({
        data: {
            name: "Suraj Ghimire",
            description: "This is the best property of all time",
            price: 500000,
            coordinate: { x: '2039490', y: '738384' },
            images: [{ name: 'Bathroom', images: ["img1.jpg", "img2.jpg"] }, { name: 'Surrounding', images: ["img3.jpg"] }],
            ownerId: 1
        }
    })
    res.status(200).send("Property of all users [{...}]")
})

module.exports = { getAllProperties, setAllProperties, setProperty }