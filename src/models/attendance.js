const mongoose = require('mongoose')

const attendanceSchema = mongoose.Schema({
  author: {
    type: String,
    required: true,
    maxlength: 100
  },
  idAuthor: {
    type: String,
    required: true,
    maxlength: 100
  },
  subject: {
    type: String,
    required: true,
    maxlength: 255
  },
  students: {
    type: String,
    required: true,
  },
  difficulties: {
    type: String,
    maxlength: 500
  },
  date: {
    type: Date,
    default: Date.now
  }
},{
  timestamps: true,
  versionKey: false
})

module.exports = mongoose.model('Attendance', attendanceSchema)