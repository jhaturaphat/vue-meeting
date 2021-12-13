const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const routes = require('./routes')

const mysql = require('./configs/databases');
mysql.query('show tables',(err, result) => {
  console.log(result);
})

app.use(session({
    secret: 'keyboard secret key',
    resave: false,
    saveUninitialized: true,
    cookie: { /*secure: true*/ }
  }))

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

// เรียกใช้งาน Routes
app.use('/api', routes);

app.get('*',(req, res) => {
    res.send('<h1>Server started</h1>')
})

app.listen(5000, ()=>{console.log("Server is start On PORT 5000");})
