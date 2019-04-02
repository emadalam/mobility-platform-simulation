const db = require('../instance')

const {Schema} = db
const {String, Number} = Schema.Types

const schema = new Schema({
  name: {type: String, required: true},
  model: {type: String, required: true},
  capacity: {type: Number, required: true},
})

module.exports = db.model('Vehicle', schema)
