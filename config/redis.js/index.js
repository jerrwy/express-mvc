module.exports = (() => {
	const agent = process.env.AGENT || 'default'
	const env = process.env.ENV || 'development'
	return require(`./redis.${agent}.json`)[env]
})()