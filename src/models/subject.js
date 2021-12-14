const mongoose = require('mongoose')

const subjectSchema = mongoose.Schema({
  teacher: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  intensity: {
    type: String,
    required: true,
  },
  program: {
    type: String,
    required: true,
  },
},{
  timestamps: true,
  versionKey: false
})

module.exports = mongoose.model('Subject', subjectSchema)