const db = require('../instance')

const Person = require('./schemas/Person')
const Location = require('./schemas/Location')

const {Schema} = db

const schema = new Schema({
  vehicleTypeId: {type: db.Schema.ObjectId, required: true},
  driver: {type: Person, required: true},
  location: {type: Location, default: null},
  customerId: {type: String, default: null},
})

module.exports = db.model('Cab', schema)
