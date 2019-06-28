const mongoose = require('../connection');
var shortid = require('shortid');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    'userId':{type: String},
    'usertype': {type: String},
    'username': {type: String},
    'email': {type:String, unique:true},
    'password': {type: String},
    'firsttym': {type: Boolean}
})

const UserMaps = new Schema({
    'userId': {type:String, required: true},
    'rightId':{type:String, required: true}, 
})

const UserRight = new Schema({
    'rightId': {type: String,required: true},
    'userRights':{type: Array,required: true}
})

const Issues = new Schema({
    'projectName':{type: String,required: true},
    'type':{type: String,required: true},
    'name': {type: String,required: true},
    'description': {type: String,required: true},
    'photo':{type: String,required: true},
    'assignTo':{type: String, required: true},
    'reportingOfficer':{type: String,required: true},
    'bugSatus':{type:Boolean ,required: true}
})

const UserModel = mongoose.model('user',UserSchema);
const MapModel = mongoose.model('user Map',UserMaps);
const RightModel = mongoose.model('user Right',UserRight);
const IssueModel = mongoose.model('Issues',Issues);
// module.exports = userModel;
module.exports = {
       userModel : UserModel,
       mapModel: MapModel,
       rightModel: RightModel,
       IssueModel: IssueModel
}