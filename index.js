const express = require('express')
const dotenv = require('dotenv');
const path = require('path');

// CONFIGS ------------------------------------
const app = express()
const port = 3000
dotenv.config({ path: path.resolve(__dirname, '.env') });

// MIDDLEWARES ------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API ROUTES ------------------------------
app.use('/properties', require('./router/owner_router/property_router.js'))


// START SERVER -------------------------------
app.listen(port, () => {
    console.log(`App listening on port ${port} . . .`)
})