const crypto = require("crypto");
const serKey = 'lv_shop';


/*
 * md5加密 一般使用密码加密
 */
const md5Sign = (data) => crypto.createHash('md5').update(data + serKey, 'utf-8').digest('hex');

//EBC加密 暂时废弃
const transEBC = (key,value) => {
  let key1 = CryptoJs.enc.Utf8.parse(key);
  const encrypted = CryptoJs.DES.encrypt(value,key1,{
      mode:CryptoJs.mode.ECB,
      padding:CryptoJs.pad.Pkcs7
  })
  return encrypted.toString();
}

//EBC解密 暂时废弃
const resolveEBC = (key,value) => {
  let key1 = CryptoJs.enc.Utf8.parse(key);
  if(typeof value == 'number'){
      value = value.toString();
  }
  const encrypted = CryptoJs.DES.decrypt(value,key1,{
      mode:CryptoJs.mode.ECB,
      padding:CryptoJs.pad.Pkcs7
  })
  console.log('解密：'+key);
  console.log(CryptoJs.enc.Utf8.parse(encrypted));
  return encrypted.toString();
}

/*
 * 遍历路由
 * route: 需要遍历的路由对象
 * router: express.Router()对象
 */
const routeLoop = (route,router) => {
	// console.log(route);
	for(let key in route){
		switch(route[key].type){
			case 'post':
				router.post(route[key].url,route[key].func);
				break;
			default: 
				router.get(route[key].url,route[key].func);
				break;
		}
	}
}



module.exports = {
	md5Sign,
	routeLoop
}