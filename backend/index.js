const express = require('express');
const session = require('express-session');

const app = express();
const port = 3000;
const cors_origin = '*';

// กำหนดค่า Session
const sessionConfig = {
  secret: 'secret',
  resave: true, // บันทึก session ทุกครั้งที่มีการร้องขอ
  saveUninitialized: true, // บันทึก session ทุกครั้งที่มีการร้องขอ โดยไม่คำนึงว่า session จะมีข้อมูลหรือไม่
  maxAge: 3600,
};

app.use(session(sessionConfig));

app.get('/', (req, res) => {
  // แสดงข้อมูล Session
  res.send(req.session);
});

app.post('/login', (req, res) => {
  req.session.name = req.name;
  res.send(req.session);
  console.log('session created',req.session);
//   res.redirect('/');
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.send(req.session);
  console.log('session destroyed',req.session);
//   res.redirect('/');
});

app.get('/cors', (req, res) => {
  res.set('Access-Control-Allow-Origin', cors_origin);
  res.send({ "msg": "This has CORS enabled 🎈" })
  })

app.listen(port);