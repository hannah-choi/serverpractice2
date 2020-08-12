const express = require('express');
const fs = require('fs')
const router = express.Router()
const template = require('../template.js')


router.get('/', (req, res) => {
    fs.readdir('./data', (err, list) => {
        let listRender = template.templateList(list)
        fs.readFile(`./data/${req.query.title}`, 'utf8', (err, data) => {
            console.log(data)
            res.send(template.templateHTML(listRender,
                `<form method="post" action="/update/file">
                <div><input type="text" name="title" placeholder="title" value=${req.query.title}></div>
                <div><textarea name="contents" placeholder="contents">${data}</textarea></div>
                <div><input type="submit" value="submit"></div>
                </form>`)
            );
        })

    })
})

router.post('/file', (req, res) => {
    fs.writeFile(`./data/${req.body.title}`, req.body.contents, () => {
        //res.send('success')
        res.redirect(`/?id=${req.body.title}`)
    })
})

module.exports = router