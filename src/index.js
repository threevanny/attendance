const express = require('express')
//const mongoose = require('mongoose')
const cookieparser = require('cookie-parser')
const cors = require('cors')

const indexRouter = require('./routes/index.routes')
const authRouter = require('./routes/auth.routes')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieparser())
app.use(cors())

//database
require('./database')

//routes
app.use(indexRouter)
app.use(authRouter)

//port
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server listening on port: ${PORT}`))