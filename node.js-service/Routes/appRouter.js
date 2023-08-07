const express = require("express");
const appController = require("../Controller/appController");
const router = express.Router();

const auth = require('../middleware/auth')

router.post("/predict", auth.authenticate, appController.predict);
router.get("/getAllPatients", auth.authenticate, appController.getAllPatients);

module.exports = router;
 
 