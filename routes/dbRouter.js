var express = require('express');
var router = express.Router();

var db = require('../app/database/db');


router.get('/createUserTable',function(req, res, next){
	var createUserTable = require('../app/database/sql/createUserTable');
	let str = '<hr/>'
	for(let key in createUserTable){
		db.query(createUserTable[key],function(result, fields){
			str += `${result}<hr/>`
		});
	}
	res.send(str)
});

router.get('/createAdminTable',function(req, res, next){
	var createAdminTable = require('../app/database/sql/createAdminTable');
	let str = `${JSON.stringify(createAdminTable)}<hr/>`;
	for(let key in createAdminTable){
		db.query(createAdminTable[key],function(result, fields){
			str += `${result}<hr/>`
		});
	}
	res.send(str)
})


router.get('/createGoodsTable',function(req, res, next){
	var createGoodsTable = require('../app/database/sql/createGoodsTable');
	let str = `${JSON.stringify(createGoodsTable)}<hr/>`;
	for(let key in createGoodsTable){
		db.query(createGoodsTable[key],function(result, fields){
			str += `${result}<hr/>`
		});
	}
	res.send(str)
})

router.get('/createOrderTable',function(req, res, next){
	var createOrderTable = require('../app/database/sql/createOrderTable');
	let str = `${JSON.stringify(createOrderTable)}<hr/>`;
	for(let key in createOrderTable){
		db.query(createOrderTable[key],function(result, fields){
			str += `${result}<hr/>`
		});
	}
	res.send(str)
})


module.exports = router;