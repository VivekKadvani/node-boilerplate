const express = require('express')
const app = express()


const userMiddleware = (req, res, next) => {
    if (!req.body.amount) {
        res.send("please enter amount")
    }
    else {
        next()
    }
}

module.exports = userMiddleware