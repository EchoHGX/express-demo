const express = require('express');
const util = require('../../common/util');
const model = require('../model')


const login = (req, res, next) => {
	// res.send(util.md5Sign(123456))
	let username = req.body.username,
			password = req.body.password;
	model.login(username,util.md5Sign(password))
		.then(result=>{
			if(result.errorCode === 10001){
				req.session.userSign = result.data;
			}
			res.status(200).json(result)
		});
}


const routers = [
	{
		type: 'post',
		url: '/login',
		func: login
	}
]

module.exports = {
	routers
}