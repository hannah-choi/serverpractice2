const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const bodyParser = require('body-parser') //post 방식으로 body의 데이터를 가져올 수 있게 해주는 모듈

app.use(bodyParser.urlencoded({ extended: false })) //bodyparser 모듈 쓰기 전에 써줘야함

app.get('/', (req, res) => {

    const queryData = req.query;
    fs.readdir('./data', (err, list) => {
        fs.readFile(`data/${req.query.id}`, 'utf8', (err,data)=>{
            console.log(data)
        res.send(`<html>
            <head></head>
            <body>
            <h1><a href="#">Web<a></h1>
            <ul>
            ${list.map(item=>`<li><a href="#">${item}</a></li>`).join('')}
            </ul>
            <a href="create">Create</a>
            <h2>Welcome</h2>
            </body>
            </html>`)
        })
    })
    console.log(req.query)
    

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


