const AdminRoute = require('express').Router();
const AdminOperation = require('../db/helpers/adminCrud');


AdminRoute.get('/right',(req,res)=>{
    AdminOperation.rights(res);
})

AdminRoute.get('/userlist',(req,res)=>{
    
    AdminOperation.userlist(res);

})

AdminRoute.post('/adduser',(req,res)=>{
    const json = req.body;
    AdminOperation.add(json,res);
})

AdminRoute.post('/edit',(req,res)=>{
    const json = req.body;
    AdminOperation.edit(json,res);
})


AdminRoute.post('/deleteuser',(req,res)=>{
    const json = req.body;
    AdminOperation.delete(json,res);
})

AdminRoute.get('/userlist',(req,res)=>{
    
    AdminOperation.userlist(res);

})


module.exports = AdminRoute;