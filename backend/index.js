const express = require('express');
const session = require('express-session');

const app = express();

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

app.listen(3000);