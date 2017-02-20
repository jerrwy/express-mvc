module.exports = (() => {
	const agent = process.env.AGENT || 'default'
	const env = process.env.ENV || 'development'
	return require(`./db.${agent}.json`)[env]
})()