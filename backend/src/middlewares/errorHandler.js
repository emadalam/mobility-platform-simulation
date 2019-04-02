const {STATUS_CODES} = require('http')

const {ApplicationError, getErrorMessage} = require('~/exceptions')

/**
 * A generic error handling middleware to catch all errors.
 * It returns a response json after logging the error.
 *  { code, error: {type, message, exceptionId}, data }
 *
 * Customization is possible by setting the following params
 * on the error object and re-throwing the error.
 *  type -> Name to log the error details with
 *  status -> The HTTP status with which the app will respond
 *  code -> The error code with which the app will respond
 *  message -> The error message that would is sent as part of the error response
 *  data -> Any additional data that needs to be sent as part of the response
 */
module.exports = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    const {
      status = 500,
      code = 1000,
      type = STATUS_CODES[status],
      data = null,
    } = err
    let message
    let exceptionId

    if (err instanceof ApplicationError) {
      // these are expected errors aka validations
      // send the error message to the clients
      message = err.message
      ctx.request.log.info(err, type)
    } else {
      // this is an unexpected error aka bug in the app
      // do not expose original error message to clients
      message = getErrorMessage(code)

      // add to application level error logs
      ctx.request.log.error(err, err.name)

      // ideally at this point we should
      // report unexpected error to external
      // error reporting services like sentry
    }

    ctx.status = status
    ctx.body = {
      code,
      error: {type, message, exceptionId},
      data,
    }
  }
}
