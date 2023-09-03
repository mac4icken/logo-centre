const path = require('path');
const express = require('express');
const https = require('https');
const fs = require('fs');
const mysql = require('mysql');
const app = express();
const PORT = 443;
const sslOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/logopazl.ru/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/logopazl.ru/fullchain.pem')
};

let DB = false;

DB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'logocentre'
});

DB.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к MySQL:', err);
    return;
  }
  console.log('[DB] Подключение к базе данных MySQL успешно установлено!');
});

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/client/index.html`);
});

app.get('/about', (req, res) => {
  res.sendFile(`${__dirname}/client/about.html`);
});

app.get('/admin', (req, res) => {
  res.sendFile(`${__dirname}/client/admin.html`);
});

app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.post('/sendform', (req, res) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const phone = req.body.phone;
  const email = req.body.email;
  DB.query('INSERT INTO orders SET name = ?, surname = ?, phone = ?, email = ?', [name, surname, phone, email], function(err, results){
    if(err) {
      console.log(err);
    } else {
      console.log('Новая заявка');
    }
  });
});
const server = https.createServer(sslOptions, app);

server.listen(PORT, () => {
  console.log(`[SERVER] Сервер успешно запущен и слушает порт ${PORT}!`);
});














// const path = require('path');
// const express = require('express');
// const app = express();
// const mysql = require('mysql') 
// const PORT = 443
// let DB = false
// DB = mysql.createConnection({
//     host: 'localhost',     
//     user: 'root',    
//     password: '',  
//     database: 'logocentre',  
//   });
//   DB.connect((err) => {
//     if (err) {
//       console.error('Ошибка подключения к MySQL:', err);
//       return;
//     }
//     console.log('[DB] Подключение к базе данных MySQL успешно установлено!');
//   });
// app.use(express.static(path.join(__dirname, 'client')))
// app.get('/', (req, res) => {
//     res.sendFile(`${__dirname}/client/index.html`);
// });
// app.get('/about', (req, res) => {
//   res.sendFile(`${__dirname}/client/about.html`);
// });
// app.get('/admin', (req, res) => {
//   res.sendFile(`${__dirname}/client/admin.html`);
// });
// // app.get((req, res) => {
// //     res.sendFile(`${__dirname}/client/error.html`);
//   // });

// app.listen(PORT, () => {
//     console.log(`[SERVER] Сервер успешно запущен и слушает порт ${PORT}!`);
// }); 
// app.use(express.json());
// var bodyParser = require('body-parser'); 
// const { log } = require('console');
// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(express.json());
// app.post('/sendform', (req, res) => {
//   const name = req.body.name;
//   const surname = req.body.surname;
//   const phone = req.body.phone
//   const email = req.body.email
//   DB.query('INSERT INTO orders SET name = ?, surname = ?, phone = ?, email = ?', [name, surname, phone, email], function(err, results){
//     if(err) {
//       console.log(err);
//     } else {
//     console.log(`Новая заявка`)
//     }
    
// });
// });
