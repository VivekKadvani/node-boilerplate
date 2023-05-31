const express = require('express')
const UserRouter = require("./routes/route.js")

const port = 3000;
const app = express()

app.use(express.json())

app.use("/", UserRouter)

app.listen(3000, () => {
    console.log("Server is listening on port :", port)
})  