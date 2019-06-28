const mongoose = require('mongoose');
const mongoURl = require('../utils/env');
mongoose.connect(mongoURl.mongo);

mongoose.connection.on('open',()=>{
   console.log('connected to Database :-)');
})

module.exports = mongoose;