const express = require('express');
const propertyRouter = express.Router();

// imports ------------------
const { getAllProperties, setAllProperties, setProperty } = require('../../controllers/property_controller');


propertyRouter.route('/getAllProperties').get(getAllProperties)

propertyRouter.route('/setAllProperties').get(setAllProperties)

propertyRouter.route('/setProperty').get(setProperty)

module.exports = propertyRouter;
