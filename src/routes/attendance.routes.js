const express = require('express')
const router = express.Router()

const {
  getAttendance,
  getAttendanceById,
  addAttendance,
  updateAttendance,
  deleteAttendance,
  getAttendancesByIdAuthor
} = require('../controllers/attendance.controller')

router.get('/api/attendance/all', getAttendance)
router.get('/api/attendance/:id', getAttendanceById)
router.post('/api/attendance/create', addAttendance)
router.post('/api/attendance/:id', updateAttendance)
router.post('/api/attendance/:id', deleteAttendance)
router.get('/api/attendance/author/:idAuthor', getAttendancesByIdAuthor)

module.exports = router