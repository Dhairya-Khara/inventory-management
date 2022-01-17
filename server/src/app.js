const express = require('express')
const cors = require('cors')

const router = require('./routes')

const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(router)


app.listen(port, () => {
    console.log("Started on port " + port)
})