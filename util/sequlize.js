const Sequelize = require('sequelize')
const dbConfig = require('../config/db')
const {clear} = require('../config/sql/common.sql.js')
const logger = require('./log')('db')

const sequelize = new Sequelize(
	dbConfig.database,
	dbConfig.user,
	dbConfig.password, 
	{
		host: dbConfig.host,
		dialect: "mysql",
		timezone: "+08:00",
		pool: {
			max: 15,
			min: 0,
			idle: 10000
		},
		// logging: log4js.replaceConsole(logger)
		logging: (sql) => {
			logger.info(sql)
		}
	}
)

// call this only in test mode
sequelize.init = () => {
	if (process.env.ENV !== 'test') {
		return Promise.reject("NOT TEST ENV")
	}
	return sequelize.sync()
	.then(() => {
		return sequelize.multiQuerySeq(clear, {
			type: sequelize.QueryTypes.DELETE
		})
	})
}

sequelize.multiQuerySeq = (sqls) => {
	return sqls.split(';').reduce((promise, sql) => {
		return promise.then(() => {
			return sequelize.query(sql)
		})
	}, Promise.resolve())
}

exports = module.exports = sequelize