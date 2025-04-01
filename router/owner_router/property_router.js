const express = require('express');
const propertyRouter = express.Router();

// imports ------------------
const { getAllProperties, createOwner, createProperty } = require('../../controllers/property_controller');


propertyRouter.route('/getAllProperties').get(getAllProperties)

propertyRouter.route('/createOwner').post(createOwner)

propertyRouter.route('/createProperty').post(createProperty)

module.exports = propertyRouter;
