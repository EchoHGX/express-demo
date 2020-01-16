/**
 * @desc 创建用户相关表的sql。包好用户登录表，用户信息表，用户登录表
 * @author huangguoxin
 * @date 2019/9/5 16:00
 */


 /**
  * 创建用户登录表 sql语句
  */
const createUserLogin = `
  CREATE TABLE IF NOT EXISTS lv_user_login(
    user_id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT '用户ID',
    login_name VARCHAR(20) NOT NULL COMMENT '用户登录名',
    password CHAR(32) NOT NULL COMMENT 'md5加密的密码',
    user_stats TINYINT NOT NULL DEFAULT 1 COMMENT '用户状态',
    update_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
    PRIMARY KEY pk_userid(user_id)
  ) ENGINE = innodb COMMENT '用户登录表'
`;


/**
  * 创建用户信息表 sql语句
  */
const createUserInfo = `
  CREATE TABLE IF NOT EXISTS lv_user_info(
    user_info_id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT '自增主键ID',
    user_id INT UNSIGNED NOT NULL COMMENT 'user_login表的自增ID',
    user_name VARCHAR(20) NOT NULL COMMENT '用户真实姓名',
    identity_card_type TINYINT NOT NULL DEFAULT 1 COMMENT '证件类型：1 身份证，2 军官证，3 护照',
    identity_card_no VARCHAR(20) COMMENT '证件号码',
    mobile_phone INT UNSIGNED COMMENT '手机号',
    user_email VARCHAR(50) COMMENT '邮箱',
    gender CHAR(1) COMMENT '性别',
    user_point INT NOT NULL DEFAULT 0 COMMENT '用户积分',
    register_time TIMESTAMP NOT NULL DEFAULT '1971-01-01 00:00:00' COMMENT '注册时间',
    birthday DATETIME COMMENT '会员生日',
    user_level TINYINT NOT NULL DEFAULT 1 COMMENT '会员级别：1 普通会员，2 青铜，3白银，4黄金，5钻石',
    user_money DECIMAL(8,2) NOT NULL DEFAULT 0.00 COMMENT '用户余额',
    update_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
    PRIMARY KEY pk_userinfoid(user_info_id)
  ) ENGINE = innodb COMMENT '用户信息表';
`;


/**
  * 创建用户等级表 sql语句
  * 用户等级
  */
const createUserLevelInfo = `
  CREATE TABLE IF NOT EXISTS lv_user_level_info(
    level_id TINYINT NOT NULL AUTO_INCREMENT COMMENT '会员级别ID',
    level_name VARCHAR(10) NOT NULL COMMENT '会员级别名称',
    min_point INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '该级别最低积分',
    max_point INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '该级别最高积分',
    update_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
    PRIMARY KEY pk_levelid(level_id)
  ) ENGINE = innodb COMMENT '用户级别信息表';
`;


/**
  * 创建用户地址表 sql语句
  * 用户地址
  */
const createUserAddress = `
  CREATE TABLE IF NOT EXISTS lv_user_addr(
    addr_id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT '自增主键ID',
    user_id INT UNSIGNED NOT NULL COMMENT 'user_login表的自增ID',
    zip SMALLINT NOT NULL COMMENT '邮编',
    province SMALLINT NOT NULL COMMENT '地区表中省份的ID',
    city SMALLINT NOT NULL COMMENT '地区表中城市的ID',
    district SMALLINT NOT NULL COMMENT '地区表中的区ID',
    address VARCHAR(200) NOT NULL COMMENT '具体的地址门牌号',
    is_default TINYINT NOT NULL COMMENT '是否默认',
    update_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
    PRIMARY KEY pk_addrid(addr_id)
  ) ENGINE = innodb COMMENT '用户地址表';
`;



/**
  * 创建用户积分日志表 sql语句
  * 积分日志
  */
const createUserPointLog = `
  CREATE TABLE IF NOT EXISTS lv_user_point_log(
    point_id INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '积分日志ID',
    user_id INT UNSIGNED NOT NULL COMMENT '用户ID',
    source TINYINT UNSIGNED NOT NULL COMMENT '积分来源：0订单，1登陆，2活动',
    refer_number INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '积分来源相关编号',
    change_point SMALLINT NOT NULL DEFAULT 0 COMMENT '变更积分数',
    create_time TIMESTAMP NOT NULL COMMENT '积分日志生成时间',
    PRIMARY KEY pk_pointid(point_id)
  ) ENGINE = innodb COMMENT '用户积分日志表';
 `;


/**
  * 创建用户余额变动表 sql语句
  * 余额变动
  */
const createUserBalanceLog = `
  CREATE TABLE IF NOT EXISTS lv_user_balance_log(
    balance_id INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '余额日志ID',
    user_id INT UNSIGNED NOT NULL COMMENT '用户ID',
    source TINYINT UNSIGNED NOT NULL DEFAULT 1 COMMENT '记录来源：1订单，2退货单',
    source_sn INT UNSIGNED NOT NULL COMMENT '相关单据ID',
    create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '记录生成时间',
    amount DECIMAL(8,2) NOT NULL DEFAULT 0.00 COMMENT '变动金额',
    PRIMARY KEY pk_balanceid(balance_id)
  ) ENGINE = innodb COMMENT '用户余额变动表';
 `;


const createUserLoginLog = `
   CREATE TABLE IF NOT EXISTS lv_user_login_log(
    login_id INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '登陆日志ID',
    user_id INT UNSIGNED NOT NULL COMMENT '登陆用户ID',
    login_time TIMESTAMP NOT NULL COMMENT '用户登陆时间',
    login_ip INT UNSIGNED NOT NULL COMMENT '登陆IP',
    login_type TINYINT NOT NULL COMMENT '登陆类型：0未成功，1成功',
    PRIMARY KEY pk_loginid(login_id,user_id)
  ) ENGINE = innodb COMMENT '用户登陆日志表'
  PARTITION BY HASH(login_id) PARTITIONS 4;
 `;

 module.exports = {
  createUserLogin,
  createUserInfo,
  createUserLevelInfo,
  createUserAddress,
  createUserPointLog,
  createUserBalanceLog,
  createUserLoginLog
 }



 

