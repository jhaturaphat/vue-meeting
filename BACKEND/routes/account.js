const route = require('express').Router();
const {check, validationResult} = require('express-validator/check');
const {onRegister} = require('../services/account');


route.post('/register',[
    check('u_username','กรุณากรอกข้อมูล').not().isEmpty(),
    check('u_password').not().isEmpty(),
    check('u_firstname').not().isEmpty(),
    check('u_lastname').not().isEmpty()
], async (req, res)=>{
    try {
        req.validate();
        res.json(await onRegister(req.body));
    } catch (ex) {
        res.error(ex);
    }    
})

module.exports = route;