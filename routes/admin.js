const express = require('express');
const router = express.Router();
const routersIndex = require('../app/admin/controller');
const { routeLoop } = require("../app/common/util");

routeLoop(routersIndex.routers,router);

router.get('/', function(req, res, next){
  res.send('new');
})


module.exports = router;