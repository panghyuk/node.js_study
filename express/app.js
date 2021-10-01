const express = require('express');
const path = require('path');
const app = express();

app.set('port',process.env.PORT || 3000);

// 미들웨어
app.use('/about',(req,res,next) => {
    console.log('모든 요청에 실행하고 싶어요.');
    next();
});

app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,'./index.html'));
});

app.post('/',(req,res)=> {
    res.send('hello express');
});

// 와일드카드
app.get('/category/:name',(req,res)=>{
    res.send(`hello ${req.params.name}`);
});

app.get('/about', (req,res)=>{
    res.send('hello express');
});

app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 실행');
});


// const express = require('express');



// const app = express();
// app.set('port',process.env.PORT || 3000);

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname,'/index.html'));
// });

// app.listen(app.get('port'), ()=> {
//     console.log(app.get('port'), '빈 포트에서 대기 중');
// });