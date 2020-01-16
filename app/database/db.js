const mysql = require('mysql');
const dbConfig = require('../../config/dbConfig');

const pool = mysql.createPool( dbConfig.mysql );


function query(sql, callback){
	//创建连接
  pool.getConnection(function(err,connection){
    if(err){throw err;return;}
    connection.query(sql, function(error,results,fields){
      //释放连接
      connection.release();
      if(error) throw error;
      //执行回调函数，将数据返回
      callback && callback(results,fields);
    });
  });
}


// 抛出方法
module.exports = {
	query
}