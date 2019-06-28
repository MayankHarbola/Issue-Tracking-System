const userRoutes = require('express').Router();
const userOperation = require('../db/helpers/userCrud');

userRoutes.post('/register',(req,res)=>{
    const json = req.body;
 
     const userCrud = require('../db/helpers/userCrud');
     userCrud.add(json,res);
 })

userRoutes.get('/check',(req,res)=>{
    userOperation.check(res);
})

userRoutes.post('/login',(req,res)=>{
     const json = req.body;
     userOperation.search(json,res);
})

userRoutes.post('/chngPwd',(req,res)=>{
    const json = req.body;
    userOperation.chngPwd(json,res);

})

// userRoutes.get('/userlist',(req,res)=>{
    
//     userOperation.userlist(res);

// })

module.exports = userRoutes;