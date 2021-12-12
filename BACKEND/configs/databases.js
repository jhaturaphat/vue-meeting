const mysql = require('mysql');
const connection  = mysql.createPool({
//   connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '123456',
  database        : 'vue_meeting'
});

module.exports = connection;