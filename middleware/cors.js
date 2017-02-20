const cors = require('cors')
const {corsOrigin} = require('../config/resource')

const corsOptions = {
	origin: (origin, callback) => {
		let originIsWhitelisted = true
		if (corsOrigin !== '*') {
			originIsWhitelisted = [].concat(corsOrigin).indexOf(origin) !== -1
		}
		callback(originIsWhitelisted ? null : 'Bad Request', originIsWhitelisted)
	}
}
module.exports = cors(corsOptions)