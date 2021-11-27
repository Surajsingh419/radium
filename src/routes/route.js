const express = require('express');
const router = express.Router();

const coinController= require("../controllers/coinController")




router.get('/test-me', function (req,res){
    res.send('my first ever api')
});

router.get("/coinMarket/states", coinController.getCoin)



module.exports = router;