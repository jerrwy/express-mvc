const {isFunction} = require('lodash')
const {Code, CodeMsg} = require('../config/resource')

module.exports = (fn) => {
	return (req, res, next) => {
		let result = fn(req, res)
		if (result && result.then && isFunction(result.then)) {
			result.then((data) => {
				res.status(Code.OK)
				res.send(typeof data === 'object' ? data : {data})
			})
			.catch(next)
		}else{
			res.status(Code.OK)
			res.send(typeof result === 'object' ? result : {data: result})
		}
	}
}