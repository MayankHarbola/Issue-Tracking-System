const mongoose = require('../connection');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    'usertype': {type: String},
    'username': {type: String},
    'email': {type:String, unique:true},
    'password': {type: String},
    'firsttym': {type: Boolean}
})

const userModel = mongoose.model('user',UserSchema);

module.exports = userModel;