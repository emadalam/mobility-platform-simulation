const mongoose = require('mongoose')

const {Schema} = mongoose
const {String, Number} = Schema.Types

module.exports = new Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true},
  sex: {type: String, required: true},
})
