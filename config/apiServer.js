const config = {
	"local": {
	
    },
	"test": {
	
    },
	"development": {
	
    },
	"production": {
		
	}
}

const env = process.env.ENV || 'development'
module.exports = config[env]