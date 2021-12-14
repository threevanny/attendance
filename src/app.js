const express = require('express')
//const mongoose = require('mongoose')
const cookieparser = require('cookie-parser')
const cors = require('cors')

const indexRouter = require('./routes/index.routes')
const authRouter = require('./routes/auth.routes')
const attendanceRouter = require('./routes/attendance.routes')
const programRouter = require('./routes/program.routes')
const subjectRouter = require('./routes/subject.routes')

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
app.use(attendanceRouter)
app.use(programRouter)
app.use(subjectRouter)

module.exports =  app