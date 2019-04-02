const services = require('~/services')

module.exports = async (ctx, next) => {
  ctx.state.services = services
  await next()
}
