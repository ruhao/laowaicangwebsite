var express = require("express")
var router = express.Router();

var DataCtrl = require("../controller/kind.controller.js");

router.get('/data',DataCtrl.lists);
router.post('/data',DataCtrl.create);


module.exports = router;
