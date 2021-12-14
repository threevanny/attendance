const express = require('express')
const router = express.Router()

const {
 getSubjects,
 getSubject,
  createSubject,
} = require('../controllers/subject.controller')

router.get('/api/subject/all', getSubjects)
router.get('/api/subject/:id', getSubject)
router.post('/api/subject/create', createSubject)

module.exports = router