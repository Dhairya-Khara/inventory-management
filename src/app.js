const app = require('./express')

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log("Started on port " + port)
})