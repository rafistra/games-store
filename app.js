const express = require("express")
const app = express()

require("dotenv").config()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const routes = require("./routes")
app.use(routes)

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})