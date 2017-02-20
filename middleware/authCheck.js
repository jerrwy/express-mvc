const {includes} = require('lodash')
const {whiteUrl} = require('../config/resource')

module.exports = (req, res, next) => {
	// 白名单检查
	let url = req.baseUrl + req.path
	if (includes(whiteUrl, url)) {
		return next()
	}

	if (!req.session || !req.session.sign) {
		let err = new Error("Not Authenticated")
		err.status = 401
		return next(err)
	}
	
	return next()
}