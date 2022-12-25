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

app.locals.rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(number);
}

app.locals.date = (date) => {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`
}