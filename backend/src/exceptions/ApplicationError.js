const {STATUS_CODES} = require('http')

const getErrorMessage = require('./getErrorMessage')

/**
 * A simple error class which should be used for
 * all the custom error handling needs. From anywhere deep
 * down the application chain, simply create an
 * object of the `ApplicationError` class and throw.
 * The application is configured such that these errors
 * are caught upstream and the clients receive properly
 * formatted errors with unique codes and corresponding
 * friendly error messages.
 *
 * @example
 * function doSomething(params, user) {
 *  if(!isValidUser(user)) {
 *    // the user is not valid
 *    // 1001 error code is defined in the `errorCodes`
 *    // as '1001' -> 'Unauthorized user blah blah'
 *    throw new ApplicationError(1001, {status: 401})
 *    // clients receive ->
 *    // {
 *    //  "code": 1001,
 *    //  "error": {"message": "Unauthorized user blah blah", type: "FORBIDDEN"}
 *    //  "data": null
 *    // }
 *  }
 *  // normal app flow
 * }
 */
class ApplicationError extends Error {
  constructor(code = 1000, {status = 400, data} = {}) {
    super(getErrorMessage(code))
    Error.captureStackTrace(this, ApplicationError)
    Object.assign(this, {
      name: 'ApplicationError',
      type: STATUS_CODES[status],
      code,
      status,
      data,
    })
  }
}

module.exports = ApplicationError
