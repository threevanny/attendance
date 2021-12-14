const express = require('express')
const router = express.Router()

const {
  getPrograms,
  getProgram,
  createProgram
} = require('../controllers/program.controller')

router.get('/api/program/all', getPrograms)
router.get('/api/program/:id', getProgram)
router.post('/api/program/create', createProgram)

module.exports = router