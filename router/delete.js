const express = require('express');
const fs = require('fs')
const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.query.id)
    fs.unlink(`data/${req.query.id}`, function (error) {
        res.redirect(`/`)
    })
})

module.exports = router
