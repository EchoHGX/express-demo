const db = require('../../database/db');
const { admin } = require('../../common/errorCode.js');


const login = (username,password) => {
	return new Promise((resolve,reject) => {
		db.query(
			`select * from lv_admin_login where login_name = '${username}' and password = '${password}'`,
			function(result,field){
				if(result.length > 0){
					resolve({...admin[10001], data: result});
				}else{
					db.query(
						`select * from lv_admin_login where login_name = '${username}'`,
						function(result2, field2){
							if(result2.length > 0){
								resolve(admin[10002])
							}else{
								resolve(admin[10003])
							}
						}
					)
				}
			}
		);
	})
	

}




module.exports = {
	login
}