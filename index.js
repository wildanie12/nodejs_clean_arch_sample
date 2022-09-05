const express = require("express")
const parser = require("body-parser")
const v1HttpApi = require("./app/http/routes/api")

const app = express()
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))

app.use("/api", v1HttpApi)

app.listen(5000, () => console.log(`Listening at port 5000`))
