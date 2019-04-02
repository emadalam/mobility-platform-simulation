const mongoose = require('mongoose')
const {DB_CONNECTION_STRING} = require('~/configs/env')

mongoose.connect(DB_CONNECTION_STRING, {useNewUrlParser: true})

module.exports = mongoose
