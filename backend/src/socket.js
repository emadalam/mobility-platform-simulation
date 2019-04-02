// @TODO:
// - refactor into respective handlers
// - optimize queries

const {init: cabInit, getAll: getAllCabs} = require('./handlers/cab')
const {
  init: customerInit,
  getAll: getAllCustomers,
} = require('./handlers/customer')

async function socketApp(socket, io) {
  cabInit(socket)
  customerInit(socket)

  const [cabs, customers] = await Promise.all([getAllCabs(), getAllCustomers()])

  socket.emit('initial_data', {cabs, customers})
}

module.exports = socketApp
