const app = require('./app')

//port
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server listening on port: ${PORT}`))