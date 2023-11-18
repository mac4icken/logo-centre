const path = require('path');
const express = require('express');
const https = require('https');
const fs = require('fs');
const mysql = require('mysql');
const app = express();
const PORT = 3000;
const sslOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/logopazl.ru/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/logopazl.ru/fullchain.pem')
};

let DB = false;

DB = mysql.createConnection({
  host: '127.0.0.1',
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

app.get('/21232f297a57a5a743894a0e4a801fc3', (req, res) => {
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
app.get('/getOrders', (req, res) => {
  DB.query('SELECT * FROM orders', (err, results) => {
    if (err) {
      console.error('Ошибка выполнения SQL-запроса:', err);
      res.status(500).json({ error: 'Произошла ошибка при получении данных.' });
    } else {
      const data = results.map(row => ({
        id: row.id,
        name: row.name,
        surname: row.surname,
        phone: row.phone,
        email: row.email,
        status: row.status
      }));

      res.json(data);
    }
  });
});
app.post('/updateStatus', (req, res) => {
  const orderId = req.body.orderId;
  
  DB.query('UPDATE orders SET status = ? WHERE id = ?', ['Рассмотренно', orderId], (err, result) => {
    if (err) {
      console.error('Ошибка при обновлении status:', err);
      res.status(500).json({ error: 'Произошла ошибка при обновлении status.' });
    } else {
      res.json({ success: true });
    }
  });
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
