const {models} = require('../services/db')
const {Customer} = models

const model = Customer
const EVENT_NAME = 'customer_update'

const getAll = async () => model.find({})

function init(socket) {
  Customer.watch().on('change', async () => {
    const data = await getAll()
    socket.emit(EVENT_NAME, data)
  })
}

module.exports = {init, model, getAll, EVENT_NAME}
