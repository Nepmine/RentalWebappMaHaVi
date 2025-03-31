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

const setOwner = asyncHandler(async (req, res) => {
    console.log("setAllProperties called !")
    const name = 'Suraj Ghimire'
    const callPrisma = await prisma.owner.create({
        data: {
            name: "Suraj Ghimire",
            // property: null
        }
    })
    res.status(200).send("Property of all users [{...}]")
})

const setProperty = asyncHandler(async (req, res) => {
    console.log("setAllProperties called !")
    console.log(req.body)
    const { name, description, price, coordinates, images, ownerId } = req.body

    if (!name || !price || !coordinates || !ownerId) {
        res.status(400).send("name, price, coordinates or OwnerId missing!")
        return
    }

    const callPrisma = await prisma.property.create({
        data: {
            name,
            description,
            price,
            coordinates,
            images,
            owner: {
                connect: { id: ownerId }
            }
        }
    })
    res.status(200).send("Property of all users [{...}]")
})

module.exports = { getAllProperties, setOwner, setProperty }