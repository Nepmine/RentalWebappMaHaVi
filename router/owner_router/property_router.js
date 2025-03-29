const express = require('express');
const propertyRouter = express.Router();

// imports ------------------
const { getAllProperties, setAllProperties } = require('../../controllers/property_controller');


propertyRouter.route('/getAllProperties').get(getAllProperties)

propertyRouter.route('/setAllProperties').get(setAllProperties)


module.exports = propertyRouter;
