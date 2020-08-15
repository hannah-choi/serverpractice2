const express = require('express');
const fs = require('fs')
const router = express.Router()
const template = require('../template.js')
const connection = require("../db")


router.get('/', (req, res) => {
        let listRender = template.templateList(req.list);
        res.send(template.templateHTML(listRender,
            `<form method="post" action="/create/file">
            <div><input type="text" name="title" placeholder="title"></div>
            <div><textarea name="contents" placeholder="contents"></textarea></div>
            <div><input type="submit" value="submit"></div>
            </form>`)
        );
})


router.post('/file', (req, res) => {
    connection.query(
        `insert into posts(title, contents) values('${req.body.title}','${req.body.contents}')`,
        (err,rows) => {
            console.log(req.body.contents)
            if (err) throw err
            res.redirect(`/?id=${req.body.title}`)
        }
    )
})



module.exports = router