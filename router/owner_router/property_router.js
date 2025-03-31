const express = require('express');
const propertyRouter = express.Router();

// imports ------------------
const { getAllProperties, setOwner, setProperty } = require('../../controllers/property_controller');


propertyRouter.route('/getAllProperties').get(getAllProperties)

propertyRouter.route('/setOwner').get(setOwner)

propertyRouter.route('/setProperty').post(setProperty)

module.exports = propertyRouter;
