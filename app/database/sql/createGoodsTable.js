/**
 * @desc 创建商品相关表的sql。包好用户登录表，用户信息表，用户登录表
 * @author huangguoxin
 * @date 2019/9/5 16:00
 */


/**
  * 商品品牌
  */
const createGoodsBrand = `
	CREATE TABLE IF NOT EXISTS lv_brand_info(
	  brand_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT '品牌ID',
	  brand_name VARCHAR(50) NOT NULL COMMENT '品牌名称',
	  brand_phone VARCHAR(50) NOT NULL COMMENT '联系电话',
	  brand_web VARCHAR(100) COMMENT '品牌网络',
	  brand_logo VARCHAR(100) COMMENT '品牌logo URL',
	  brand_desc VARCHAR(150) COMMENT '品牌描述',
	  brand_status TINYINT NOT NULL DEFAULT 0 COMMENT '品牌状态,0禁用,1启用',
	  brand_order TINYINT NOT NULL DEFAULT 0 COMMENT '排序',
	  update_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
	  PRIMARY KEY pk_brandid (brand_id)
	)ENGINE=innodb COMMENT '品牌信息表';
`;


/**
  * 商品分类
  */
const createGoodsCategory = `
	CREATE TABLE IF NOT EXISTS lv_goods_category(
	  category_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT '分类ID',
	  name VARCHAR(10) NOT NULL COMMENT '分类名称',
	  code VARCHAR(10) NOT NULL COMMENT '分类编码',
	  parent_id SMALLINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '父分类ID',
	  category_level TINYINT NOT NULL DEFAULT 1 COMMENT '分类层级',
	  category_status TINYINT NOT NULL DEFAULT 1 COMMENT '分类状态',
	  update_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT  '最后修改时间',
	  PRIMARY KEY pk_categoryid(category_id)
	)ENGINE=innodb COMMENT '商品分类表'
`;


const createGoodsSupplierInfo = `
	CREATE TABLE IF NOT EXISTS lv_supplier_info(
	  supplier_id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT '供应商ID',
	  supplier_code CHAR(8) NOT NULL COMMENT '供应商编码',
	  supplier_name CHAR(50) NOT NULL COMMENT '供应商名称',
	  supplier_type TINYINT NOT NULL COMMENT '供应商类型：1.自营，2.平台',
	  supplier_person VARCHAR(10) NOT NULL COMMENT '供应商联系人',
	  supplier_phone VARCHAR(50) NOT NULL COMMENT '联系电话',
	  bank_name VARCHAR(50) NOT NULL COMMENT '供应商开户银行名称',
	  bank_account VARCHAR(50) NOT NULL COMMENT '银行账号',
	  supplier_address VARCHAR(200) NOT NULL COMMENT '供应商地址',
	  supplier_status TINYINT NOT NULL DEFAULT 0 COMMENT '状态：0禁止，1启用',
	  update_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT  '最后修改时间',
	  PRIMARY KEY pk_supplierid(supplier_id)
	) ENGINE = innodb COMMENT '供应商信息表';
`;


const createGoodsInfo = `
	CREATE TABLE IF NOT EXISTS lv_goods_spu(
	  goods_id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT '商品信息ID',
	  goods_core CHAR(16) NOT NULL COMMENT '商品编码',
	  goods_name VARCHAR(20) NOT NULL COMMENT '商品名称',
	  bar_code VARCHAR(50) NOT NULL COMMENT '国条码',
	  brand_id INT UNSIGNED NOT NULL COMMENT '品牌表的ID',
	  one_category_id SMALLINT UNSIGNED NOT NULL COMMENT '一级分类ID',
	  two_category_id SMALLINT UNSIGNED NOT NULL COMMENT '二级分类ID',
	  three_category_id SMALLINT UNSIGNED NOT NULL COMMENT '三级分类ID',
	  supplier_id INT UNSIGNED NOT NULL COMMENT '商品的供应商ID',
	  price DECIMAL(8,2) NOT NULL COMMENT '商品销售价格',
	  average_cost DECIMAL(18,2) NOT NULL COMMENT '商品加权平均成本',
	  publish_status TINYINT NOT NULL DEFAULT 0 COMMENT '上下架状态：0下架1上架',
	  audit_status TINYINT NOT NULL DEFAULT 0 COMMENT '审核状态：0未审核，1已审核',
	  weight FLOAT COMMENT '商品重量',
	  length FLOAT COMMENT '商品长度',
	  height FLOAT COMMENT '商品高度',
	  width FLOAT COMMENT '商品宽度',
	  goodsion_date DATETIME NOT NULL COMMENT '生产日期',
	  shelf_life INT NOT NULL COMMENT '商品有效期',
	  descript TEXT NOT NULL COMMENT '商品描述',
	  pic VARCHAR(200) NOT NULL COMMENT '缩略图URL',
	  update_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
	  PRIMARY KEY pk_goodsid(goods_id)
	) ENGINE = innodb COMMENT '商品信息表';
`;


const createGoods = `
	CREATE TABLE IF NOT EXISTS lv_goods_sku(
	  goods_id_sku INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT '商品sku ID',
	  goods_id INT NOT NULL COMMENT '商品信息ID: spu_id',
	  goods_name VARCHAR(20) NOT NULL COMMENT '商品名称',
	  bar_code VARCHAR(50) NOT NULL COMMENT '国条码',
	  price DECIMAL(8,2) NOT NULL COMMENT '商品销售价格',
	  average_cost DECIMAL(18,2) NOT NULL COMMENT '商品加权平均成本',
	  publish_status TINYINT NOT NULL DEFAULT 0 COMMENT '上下架状态：0下架1上架',
	  audit_status TINYINT NOT NULL DEFAULT 0 COMMENT '审核状态：0未审核，1已审核',
	  goodsion_date DATETIME NOT NULL COMMENT '生产日期',
	  shelf_life INT NOT NULL COMMENT '商品有效期',
	  descript TEXT NOT NULL COMMENT '商品描述',
	  pic VARCHAR(200) NOT NULL COMMENT '缩略图URL：选规格时展示的图片',
	  sku_key varchar(30) NOT NULL DEFAULT '' COMMENT '该sku属性324_52_568...234,52,568各表示规格id',
	  has_sku varchar(255) NOT NULL DEFAULT '' COMMENT '拥有的规格组合：1_234,222,662;k_***;...1是大规格分组id（颜色），234是规格id（红色）',
	  all_sku varchar(255) NOT NULL DEFAULT '' COMMENT '商品的规格组合：1_234,222,662;k_***;...1是大规格分组id（颜色），234是规格id（红色）',
	  update_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
	  PRIMARY KEY pk_goodsidsku(goods_id_sku)
	) ENGINE = innodb COMMENT '商品表';
`;

const createGoodsAttr = `
	CREATE TABLE IF NOT EXISTS lv_goods_attr(
	  attr_id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT '规格 ID',
	  one_attr INT COMMENT '一级属性规格',
	  two_attr INT COMMENT '二级属性规格',
	  three_attr INT COMMENT '三级属性规格',
	  update_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
	  PRIMARY KEY pk_attrid(attr_id)
	) ENGINE = innodb COMMENT '商品规格表';
`;


const createGoodsInfoB2C = `
	CREATE TABLE IF NOT EXISTS tb_shop_goods (
    id int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
    sid int(11) NOT NULL DEFAULT '0' COMMENT '商家ID，默认为平台自营',
    lang int(3) unsigned NOT NULL DEFAULT '1' COMMENT '语言id',
    name varchar(255) DEFAULT NULL COMMENT '商品名称',
    title varchar(255) NOT NULL DEFAULT '''''' COMMENT '提示标题',
    model int(11) unsigned NOT NULL DEFAULT '0' COMMENT '模型id',
    create_time datetime NOT NULL COMMENT '创建时间',
    update_time datetime NOT NULL COMMENT '更新时间',
    sort int(11) NOT NULL DEFAULT '100' COMMENT '排序',
    status tinyint(10) NOT NULL DEFAULT '1' COMMENT '是否上架',
    view int(11) unsigned NOT NULL DEFAULT '0' COMMENT '点击量',
    trash tinyint(2) unsigned NOT NULL DEFAULT '0' COMMENT '回收站',
    goods_remark text COMMENT '商品推荐语',
    goods_sn varchar(30) DEFAULT NULL COMMENT '商品货号',
    cat_id varchar(30) NOT NULL COMMENT '商品分类',
    cat_tree varchar(20) NOT NULL COMMENT '商品分类树',
    market_price decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '市场价',
    shop_price decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '本店售价',
    cost_price decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '成本价',
    thumb varchar(200) DEFAULT NULL COMMENT '商品缩略图',
    weight int(20) DEFAULT NULL COMMENT '单品重量',
    sales_sum int(20) NOT NULL DEFAULT '0' COMMENT '销量',
    stock int(20) NOT NULL DEFAULT '100' COMMENT '库存数量',
    give_score int(20) NOT NULL DEFAULT '0' COMMENT '赠送积分',
    need_score int(20) NOT NULL DEFAULT '0' COMMENT '积分价格',
    keywords text COMMENT '商品关键词',
    is_comm tinyint(2) NOT NULL DEFAULT '0' COMMENT '是否推荐',
    is_new tinyint(2) NOT NULL DEFAULT '0' COMMENT '是否新品',
    is_audit tinyint(2) NOT NULL DEFAULT '1' COMMENT '是否审核',
    is_hot tinyint(2) NOT NULL DEFAULT '0' COMMENT '是否热卖',
    is_empty tinyint(4) DEFAULT '0' COMMENT '是否断货',
    is_draft enum('0','1') NOT NULL DEFAULT '0' COMMENT '是否是草稿',
    sale_time datetime DEFAULT NULL COMMENT '出售时间',
    max_buy int(10) NOT NULL DEFAULT '0' COMMENT '单次最大购买数量',
    url text,
    integral_commodity enum('0','1') NOT NULL DEFAULT '0' COMMENT '是否是积分商品',
    buy_multiple int(255) DEFAULT '1' COMMENT '购买倍数',
    units varchar(255) DEFAULT NULL COMMENT '计量单位',
    brand int(11) NOT NULL COMMENT '品牌',
    postage_tmp varchar(11) DEFAULT NULL COMMENT '运费模板',
    PRIMARY KEY (id),
    KEY cat_id (cat_id) USING BTREE
  ) ENGINE=InnoDB COMMENT='商品列表模型表';
`;

const createGoodsPicInfo = `
	CREATE TABLE IF NOT EXISTS lv_goods_pic_info(
	  pic_id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT '商品图片ID',
	  goods_id_sku INT UNSIGNED NOT NULL COMMENT '商品ID:商品sku',
	  pic_desc VARCHAR(50) COMMENT '图片描述',
	  pic_url VARCHAR(200) NOT NULL COMMENT '图片URL',
	  is_master TINYINT NOT NULL DEFAULT 0 COMMENT '是否主图：0.非主图1.主图',
	  pic_order TINYINT NOT NULL DEFAULT 0 COMMENT '图片排序',
	  pic_status TINYINT NOT NULL DEFAULT 1 COMMENT '图片是否有效：0无效 1有效',
	  update_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT  '最后修改时间',
	  PRIMARY KEY pk_picid(pic_id)
	)ENGINE=innodb COMMENT '商品图片信息表';
`;

const createGoodsComment = `
	CREATE TABLE IF NOT EXISTS lv_goods_comment(
	  comment_id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT '评论ID',
	  goods_id INT UNSIGNED NOT NULL COMMENT '商品ID',
	  order_id BIGINT UNSIGNED NOT NULL COMMENT '订单ID',
	  user_id INT UNSIGNED NOT NULL COMMENT '用户ID',
	  title VARCHAR(50) NOT NULL COMMENT '评论标题',
	  content VARCHAR(300) NOT NULL COMMENT '评论内容',
	  audit_status TINYINT NOT NULL COMMENT '审核状态：0未审核，1已审核',
	  audit_time TIMESTAMP NOT NULL DEFAULT '1971-01-01 00:00:00' COMMENT '评论时间',
	  update_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
	  PRIMARY KEY pk_commentid(comment_id)
	) ENGINE = innodb COMMENT '商品评论表';
`;


module.exports = {
	createGoodsBrand,
	createGoodsCategory,
	createGoodsSupplierInfo,
	createGoodsInfo,
	createGoods,
	createGoodsAttr,
	createGoodsPicInfo,
	createGoodsComment
}