const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoutes');
const adminRoute = require('./routes/adminRoute');
const TesterRoute = require('./routes/testerRoute');
const DevRoute = require('./routes/devloperRoute');

const app = express();
app.use(require('./utils/cors'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/',userRoute);
app.use('/',adminRoute);
app.use('/',TesterRoute);
app.use('/',DevRoute);


app.listen(process.env.PORT || 1234,(err)=>{
    if(err){
        console.log("Error in server Staring ❌",err);
    }else{
        console.log("Server Started 😃");
    }
})