const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoutes');
const addxlx = require('./routes/addxlx');
const AdminRoute = require('./routes/adminRoute')



const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(require('./utils/cors'));


app.use('/',addxlx);
app.use('/',userRoute);
app.use('/',AdminRoute);


app.listen(process.env.PORT || 3000,(err)=>{
if(err){
    console.log("Error in server starting..",err);
}else{
    console.log('server started.......');
}
})