const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorsController")
const book2Controller= require("../controllers/NewbookControllers")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createAuthor',  authorController.createAuthor  );
router.post('/createBook2',  book2Controller.createBook2  );
router.get('/getChetanBhagat',  authorController.ChetanBhagat  );

router.get('/getFindByName',  book2Controller.FindByName  );
router.get('/getBookByAuthorName',book2Controller.getBookByAuthorName)

router.get('/priceUpdate',book2Controller.priceUpdate)

router.get('/findByName',book2Controller.findByName)

module.exports = router;