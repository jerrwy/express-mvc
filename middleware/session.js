const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const redisConfig = require('../config/redis')

module.exports = session({
	name: "sid",
	secret: "xxxxxx",
	resave: true,
	rolling: true,
	saveUninitialized: false,
	cookie: {
		maxAge: 14400000
	},
	store: new RedisStore({
		host: redisConfig.host,
		port: redisConfig.port,
		pass: redisConfig.password,
		db: redisConfig.db,
		ttl: 1800,
		logErrors: true
	})
})