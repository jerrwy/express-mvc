const redis = require('redis')
const Error = require('./error')
const redisConfig = require('../config/redis')

module.exports = {
  client(cmd, ...args) {
    return new Promise((resolve, reject) => {
      if (!cmd || typeof cmd !== 'string') {
        return reject(Error('redis cmd is required'))
      }

      const redisCli = redis.createClient(redisConfig)

      args.push((err, data) => {
        if (err) {
          return reject(err)
        }
        redisCli.quit()
        resolve(data)
      })
      redisCli[cmd](...args)
    })
  }
}
