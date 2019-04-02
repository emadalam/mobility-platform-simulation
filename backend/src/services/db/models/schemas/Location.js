const mongoose = require('mongoose')

const {Schema} = mongoose
const {Decimal128} = Schema.Types

module.exports = new Schema({
  lng: {type: Decimal128, required: true},
  lat: {type: Decimal128, required: true},
})
