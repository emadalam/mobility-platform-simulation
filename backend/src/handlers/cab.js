const {models} = require('../services/db')
const {Cab} = models

const model = Cab
const EVENT_NAME = 'cab_update'
const getAll = async () => model.find({})

function init(socket) {
  Cab.watch().on('change', async () => {
    const data = await getAll()
    socket.emit(EVENT_NAME, data)
  })
}

module.exports = {init, model, getAll, EVENT_NAME}
