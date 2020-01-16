module.exports = {
  mysql: {
    host: '127.0.0.1',
    user: 'root', //数据库账号
    password: 'root', //数据库密码
    database: 'lv_shop',//数据库名
    port: 3306
  },
  authSign: 'lv_shop',
  whiteRoute: [ //路由白名单
  	'/admin/login',
  	'/admin/logout'
  ]
}