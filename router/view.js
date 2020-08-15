const express = require('express');
const fs = require('fs')
const router = express.Router()
const template = require('../template.js')
const connection = require("../db")

router.get('/', (req, res, next) => {
    let listRender = template.templateList(req.list)
    const queryData = req.query;
    if (!queryData.id) {
        queryData.id = "Welcome";
        data = `<p>Hello world<p><img src="/hello.jpeg">`;
        modify = `<a href="/create">Create</a>`;
        res.send(template.templateHTML(listRender,
            `${modify}
            <h2>${queryData.id}</h2>
            <div>${data}</div>`)
        );
    } else {     
        connection.query(`select * from posts where title='${req.query.id}'`, (err,rows)=>{
            if(err){
                next(err) //에러가 있을시 다음 구문은 무시하고, 다음의 미들웨어로 가서 코드 실행할 것
                //console.log('@@@')
                } 
            let modify = "";
            modify = `<a href="/update?id=${req.query.id}">update</a>&nbsp;<a href="/delete?id=${req.query.id}">delete</a>`
            
            res.send(template.templateHTML(listRender,
                `${modify}
                <h2>${queryData.id}</h2>
                <div>${rows[0].contents}</div>`)
                );
        })   
    }
});

module.exports = router //내보낼준비 완료