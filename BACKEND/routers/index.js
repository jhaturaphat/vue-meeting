const route = require('express').Router;



route.get('/',(req, res)=>{res.json({message:"router page"})});

module.exports = route;