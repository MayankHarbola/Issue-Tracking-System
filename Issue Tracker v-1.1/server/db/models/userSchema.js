const mongoose = require('../connection');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    'usertype': {type: String},
    'username': {type: String},
    'email': {type:String, unique:true},
    'password': {type: String},
    'firsttym': {type: Boolean}
})

const userRight = new Schema({
    'unsolvedbug': {type:String, required: true},
    'resolvedbug':{type:String, required: true},
    'adduserxls': {type:String, required: true},
    'userlist': {type:String, required: true}
})

const UserModel = mongoose.model('user',UserSchema);
const RightModel = mongoose.model('right',userRight);
// module.exports = userModel;
module.exports = {
       userModel : UserModel,
       rightModel: RightModel
}