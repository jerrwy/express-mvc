var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var morgan = require('morgan')
const logger = require('./util/log')("err")
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
const sequelize = require('./util/sequelize')
var cors = require('./middleware/cors')
const session = require('session')
const {Code, CodeMsg} = require('./config/resource')

//routes
var index = require('./routes/index')
var users = require('./routes/users')

var app = express()

// init database
sequelize.sync()

// view engine setup
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors)
// app.use(express.static(path.join(__dirname, 'public')))

// session
// app.use(function (req, res, next) {
// 	if (!req.session) {
// 		return next(new Error('fuck'))
// 	}
// 	next()
// })

app.use('/', index)
app.use('/users', users)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  logger.error(err)
  res.status(err.status || 500)
  return res.send({
    code: err.code || Code.ERROR,
    msg: err.message || CodeMsg[err.code] || CodeMsg[Code.ERROR]
  })
})

module.exports = app
