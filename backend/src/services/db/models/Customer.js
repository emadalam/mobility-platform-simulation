const db = require('../instance')

const Person = require('./schemas/Person')
const Location = require('./schemas/Location')

const {Schema} = db

const schema = new Schema({
  details: {type: Person, required: true},
  location: {type: Location, default: null},
})

module.exports = db.model('Customer', schema)
