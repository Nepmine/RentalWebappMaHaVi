const asyncHandler = require("express-async-handler");

// ------ Prisma ----------------------------
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


// request: property/getAllProperties
// description: get all properties in the system
const getAllProperties = asyncHandler(async (req, res) => {
    console.log("getAllProperties called !")

    const coords = await prisma.Property.findMany({
        select: {
            coordinates: true
        }
    })
    if (coords) {
        res.status(200).send(coords)
    }
    else res.status(500).send("Enternal Server Error !")
})


// request: property/createOwner
// description: create a new Owner
const createOwner = asyncHandler(async (req, res) => {
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


// request: property/setProperty
// description: create a new property
const createProperty = asyncHandler(async (req, res) => {
    console.log("setAllProperties called !")
    console.log(req.body)
    const { name, description, price, coordinates, images, ownerId } = req.body

    if (!name || !price || !coordinates || !ownerId) {
        res.status(400).send("name, price, coordinates or OwnerId missing!")
        return
    }

    try {
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
    }
    catch (e) {
        console.log("Error occoured while inserting data in database", e)
        res.status(400).send("Error occoured while inserting data in database")
    }
    res.status(200).send("Property inserted Successfully")
})

module.exports = { getAllProperties, createOwner, createProperty }