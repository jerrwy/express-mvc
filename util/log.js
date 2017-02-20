const log4js = require('log4js')
log4js.configure('./config/log4js.json')

module.exports = (tag) => {
	return log4js.getLogger(tag)
}