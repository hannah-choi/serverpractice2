const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/user', (req, res) => {
//     req.query.id
//     res.send(req.query.id)
// })

// app.get('/user', (req, res) => {
//     res.send(`${req.query.id}${req.query.name}`)
// })

app.use(express.static('public'));


// app.get('/', (req, res) => {
//     let string = ""

//     console.log(req.query.id)
//     if (req.query.id === "1") {
//         string = "HTML"
//     }
//     else if (req.query.id === "2") {
//         string = "CSS"
//     }
//     else if (req.query.id === "3") {
//         string = "Javascript"
//     }

//     const html = './public/practice.html'
//     res.send(html)

// }) //동적 웹페이지: 코드를 직접 입력을 해서 전달하는 경우
// 정적 : 파일 자체를 전달하는 경우


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})