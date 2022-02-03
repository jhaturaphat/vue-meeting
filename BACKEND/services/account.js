const connection = require('../configs/databases');
const {password_hash} = require('../configs/security');



module.exports = {
    onRegister(value){
        return new Promise((resolve, reject)=>{
            value.u_password = password_hash(value.u_username);
            connection.query('INSERT INTO tb_users SET ?', value, (error, result)=>{
                if(error) return reject(error);
                resolve(result);
            });            
        }) 
    }
}