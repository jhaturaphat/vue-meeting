const route = require('express').Router();

route.post('/register', (req, res)=>{
    res.json(req.body);
})

module.exports = route;