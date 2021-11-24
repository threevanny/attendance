const User = require('../models/user')

const authCtrl = {}

authCtrl.register = (req, res) => {
  console.log(req.body)
  const newuser = new User(req.body)

  if (newuser.password != newuser.password2) return res.status(400).json({ message: "password not match" })

  User.findOne({ email: newuser.email }, function (err, user) {
    if (user) return res.status(400).json({ auth: false, message: "email exits" })

    newuser.save((err, doc) => {
      if (err) {
        console.log(err)
        return res.status(400).json({ success: false })
      }
      res.status(200).json({
        success: true,
        user: doc
      })
    })
  })
}

authCtrl.login = (req, res) => {
  let token = req.cookies.auth
  User.findByToken(token, (err, user) => {
    if (err) return res(err)
    if (user) return res.status(400).json({
      error: true,
      message: "You are already logged in"
    })

    else {
      User.findOne({ 'email': req.body.email }, function (err, user) {
        if (!user) return res.json({ isAuth: false, message: 'Auth failed, email not found' })

        user.comparepassword(req.body.password, (err, isMatch) => {
          if (!isMatch) return res.json({ isAuth: false, message: "password doesn't match" })

          user.generateToken((err, user) => {
            if (err) return res.status(400).send(err)
            res.cookie('auth', user.token).json({
              isAuth: true,
              id: user._id,
              token: user.token,
              email: user.email,
              role: user.role
            })
          })
        })
      })
    }
  })
}

authCtrl.goToProfile = async (req, res) => {
  console.log('yeah i am here')
  const token = req.token || req.cookies.auth || req.body.token
  console.log('profile:', token)
  await User.findByToken(token, (err, docs) => {
      if (err) console.error("Error getting user!", err)
      else res.json(docs)
  })
}

authCtrl.logout = (req, res) => {
  req.user.deleteToken(req.token, (err, user) => {
    if (err) return res.status(400).send(err)
    res.sendStatus(200)
  })
}

authCtrl.getUsers = async (req, res)=> {
  const limit = 15
  await User.find({}, (err, docs) => {
      if (err) console.error("Error getting users!", err)
      else res.json(docs)
  }).limit(limit)
}

authCtrl.getUser = async (req, res,) => {
  const id = req.params.id
  await User.findById(id, (err, docs) => {
      if (err) console.error("Error getting user!", err)
      else res.json(docs)
  })
}

module.exports = authCtrl