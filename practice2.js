const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser') //post 방식으로 body의 데이터를 가져올 수 있게 해주는 모듈
const router = require('./router/index.js')

app.use(bodyParser.urlencoded({ extended: false })) //bodyparser 모듈 쓰기 전에 써줘야함
app.use(express.static('public'));
app.use('/', router)

//익스프레스에서는 순서가 중요하다
//예외처리는 항상 마지막에

app.use((req,res)=>{ //(일반라우터)
    res.status(404).send('Page not found')
}) //서버가 클라이언트한테 요청할때는 항상 상태코드가 존재한다. ex:200은 성공 404는 없을때. 각 상황에 맞는 코드를 보내주는것이 좋다 


app.use((err,req,res)=>{ //미들웨어 (에러핸들러)
    //익스프레스에서의 미들웨어는 요청이 와서 서버가 처리할 때까지 거쳐가는 함수들

    res.status(500).send('No such file or directory')
}) //서버가 클라이언트한테 요청할때는 항상 상태코드가 존재한다. ex:500 서버에서 예상치못한 에러발생시의 코드 


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


