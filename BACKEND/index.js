const express = require('express');
const server = express();

server.get('*',(req, res) => {
    res.send('<h1>Server started</h1>')
})

server.listen(5000, ()=>{console.log("Server is start On PORT 5000");})
