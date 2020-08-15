const express = require('express');
const viewRouter = require('./view.js')
const createRouter = require('./create.js')
const updateRouter = require('./update.js')
const deleteRouter = require('./delete.js')
const router = express.Router()
const connection = require("../db")

router.get("*", (req,res,next)=>{
    connection.query(`select * from posts`, (err,rows)=>{
        req.list = rows;
        next();
    })
})

router.use('/', viewRouter)
router.use('/create', createRouter)
router.use('/update', updateRouter)
router.use('/delete', deleteRouter)

module.exports = router
