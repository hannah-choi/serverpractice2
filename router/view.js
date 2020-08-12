const express = require('express');
const fs = require('fs')
const router = express.Router()
const template = require('../template.js')


router.get('/', (req, res, next) => {
    const queryData = req.query;
    fs.readdir('./data', (err, list) => {
        let listRender = template.templateList(list)
        fs.readFile(`data/${queryData.id}`, 'utf8', (err, data) => {
            if(err){
                next(err) //에러가 있을시 다음 구문은 무시하고, 다음의 미들웨어로 가서 코드 실행할 것
                console.log('@@@')
            } 
            let modify = "";
            if (!queryData.id) {
                queryData.id = "Welcome";
                data = `<p>Hello world<p><img src="/hello.jpeg">`;
                modify = `<a href="/create">Create</a>`;
            } else {
                modify = `<a href="/update?title=${req.query.id}">update</a>&nbsp;<a href="/delete?id=${req.query.id}">delete</a>`
            } 
            res.send(template.templateHTML(listRender,
                `${modify}
                <h2>${queryData.id}</h2>
                <div>${data}</div>`)
            );
        })
    });
});

module.exports = router //내보낼준비 완료