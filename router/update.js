const express = require('express');
const fs = require('fs')
const router = express.Router()
const template = require('../template.js')
const connection = require("../db")


router.get('/', (req, res) => {
    let listRender = template.templateList(req.list);
    connection.query(`select * from posts where title='${req.query.id}'`, (err,rows)=>{
            res.send(template.templateHTML(listRender,
                `<form method="post" action="/update/file">
                <div><input type="text" name="title" placeholder="title" value=${req.query.id}></div>
                <div><textarea name="contents" placeholder="contents">${rows[0].contents}</textarea></div>
                <div><input type="submit" value="submit"></div>
                </form>`)
            );
        })   
})

router.post('/file', (req, res) => {
    console.log(`update posts set title = '${req.body.title}', contents = '${req.body.contents}' where title = '${req.body.title}'`)
    connection.query(
        `update posts set contents = '${req.body.contents}' where title = '${req.body.title}'`,
        (err,rows) => {
        //res.send('success')
        res.redirect(`/?id=${req.body.title}`)
    })
})

module.exports = router