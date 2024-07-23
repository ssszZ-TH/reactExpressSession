const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 5000;
const cors_origin = '*';

// กำหนดค่า Session
const sessionConfig = {
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 3600 * 1000 } // maxAge ในหน่วยมิลลิวินาที
};

app.use(session(sessionConfig));
app.use(cors({
  origin: cors_origin,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));
app.use(bodyParser.json()); // ใช้ body-parser เพื่อจัดการ request body

app.get('/', (req, res) => {
  // แสดงข้อมูล Session
  res.send({ hello: 'hello' });
});

app.get('/checkLogin', (req, res) => {
  // แสดงข้อมูล Session
  if (req.session.name) {
    res.send({ name: req.session.name });
  } else {
    res.status(401).send({ error: 'Not logged in' });
  }
});

app.post('/login', (req, res) => {
  const { name } = req.body;
  if (name) {
    req.session.name = name;
    res.send({ message: 'Login successful', name: req.session.name });
  } else {
    res.status(400).send({ error: 'Name is required' });
  }
});

app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send({ error: 'Failed to destroy session' });
    }
    res.send({ message: 'Logout successful' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
