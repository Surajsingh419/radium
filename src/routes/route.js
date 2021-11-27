const express = require('express');
const router = express.Router();

const cowinController= require("../controllers/cowinController")

router.get("/londonTemp/states", cowinController.Temp)
router.get("/cowin/districts/:stateId", cowinController.getDistrictsList)
router.get("/cowin/centers", cowinController.getByPin)
router.post("/cowin/getOtp", cowinController.getOtp)
router.get("/Weather", cowinController.getweather)


module.exports = router;