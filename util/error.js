const {Code, CodeMsg} = require('../config/resource')

class Error{
	constructor(code, msg){
		this.code = code
		this.message = msg || CodeMsg[code] || "未知错误"
	}
}

module.exports = (code, msg) => {
	return new Error(code, msg)
}