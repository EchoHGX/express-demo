/**
 * @desc 创建后台管理员相关表的sql。包好用户登录表，用户信息表，用户登录表
 * @author huangguoxin
 * @date 2019/9/5 16:00
 */


const createAdmin = `
	CREATE TABLE IF NOT EXISTS lv_admin_login(
    user_id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT '管理员ID',
    login_name VARCHAR(20) NOT NULL COMMENT '管理员账号',
    admin_name VARCHAR(20) NOT NULL COMMENT '管理员登录名',
    admin_level TINYINT NOT NULL DEFAULT 1 COMMENT '管理员等级:1，普通管理员；2，超级管理员', 
    password CHAR(32) NOT NULL COMMENT 'md5加密的密码',
    user_stats TINYINT NOT NULL DEFAULT 1 COMMENT '管理员状态', 
    modified_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
    PRIMARY KEY pk_userid(user_id)
  ) ENGINE = innodb COMMENT '管理员登录表'
`;

module.exports = {
	createAdmin
}