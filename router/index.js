const express = require('express');
const viewRouter = require('./view.js')
const createRouter = require('./create.js')
const updateRouter = require('./update.js')
const deleteRouter = require('./delete.js')
const router = express.Router()

router.use('/', viewRouter)
router.use('/create', createRouter)
router.use('/update', updateRouter)
router.use('/delete', deleteRouter)

module.exports = router
