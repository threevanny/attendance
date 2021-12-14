const mongoose = require('mongoose')

const programSchema = mongoose.Schema({
  code: {
    type: String,
    required: true,
    maxlength: 100
  },
  name: {
    type: String,
    required: true,
    maxlength: 255
  },
  coordinator: {
    type: String,
    required: true,
    maxlength: 255
  },
  duration: {
    type: String,
    required: true,
  },
},{
  timestamps: true,
  versionKey: false
})

module.exports = mongoose.model('Program', programSchema)