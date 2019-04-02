module.exports = async (ctx, next) => {
  ctx.log.info('app request')
  await next()
}
