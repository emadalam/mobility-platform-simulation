require('module-alias/register')

const appName = require('~/configs/appName')
const {isProd, LOGGER_ENABLED} = require('~/configs/env')

const Koa = require('koa')
const koaHelmet = require('koa-helmet')
const koaLogger = require('koa-pino-logger')
const koaCompress = require('koa-compress')
const koaEtag = require('koa-etag')

// import top level middlewares
const requestLogger = require('~/middlewares/requestLogger')
const errorHandler = require('~/middlewares/errorHandler')
const servicesLoader = require('~/middlewares/servicesLoader')

// create new base app to host and mount other apps
const app = new Koa()

// use compress middleware for gzip compression
app.use(koaCompress())

// use etag middleware for HTTP Etags
app.use(koaEtag())

// use the helmet middleware, to offer a bit of extra security
app.use(koaHelmet())

// init logging
app.use(
  koaLogger({
    name: appName,
    prettyPrint: !isProd,
    enabled: LOGGER_ENABLED,
  })
)
app.use(requestLogger)

// load services
app.use(servicesLoader)

// add global error handling
app.use(errorHandler)

module.exports = app
