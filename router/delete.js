const express = require('express');
const fs = require('fs')
const router = express.Router()
const connection = require("../db")

router.get('/', (req, res) => {
    connection.query(
        `delete from posts where title = '${req.query.id}'`,
        (err,rows) => {
            res.redirect('/');
        })
})

module.exports = router

