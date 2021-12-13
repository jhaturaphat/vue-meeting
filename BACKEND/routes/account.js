const route = require('express').Router();

route.post('/register', (req, res)=>{
    res.json({message:"account page"});
})

module.exports = route;