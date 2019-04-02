const errors = require('./errorCodes')

module.exports = function getErrorMessage(code) {
  let message = errors[code]
  if (!message) {
    console.warn('Using unknown error code. Falling back to default message.')
    message = errors[1000]
  }
  return message
}
