const express = require('express')
const { auth } = require('../middlewares/auth')
const router = express.Router()

const {
  register,
  login,
  goToProfile,
  logout,
  getUsers,
  getUser
} = require('../controllers/auth.controller')

router.post('/api/register', register)
router.post('/api/login', login)
router.post('/api/profile', auth, goToProfile)
router.post('/api/logout', auth, logout)
router.get('/api/users', getUsers)
router.get('/api/user/:id', getUser)


module.exports = router