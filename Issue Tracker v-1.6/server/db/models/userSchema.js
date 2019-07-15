const mongoose = require('../connection');
var shortid = require('shortid');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    'userId':{type: String},
    'usertype': {type: String},
    'username': {type: String},
    'email': {type:String, unique:true},
    'password': {type: String},
    'firsttym': {type: Boolean},
    'phone': {type:Number},//*******************:~P**************************** */
    'img':{type:String},
    'AboutMe':{type:String},
    'firstName': {type:String},
    'lastName': {type:String},
    'Address': {type:String},
    'city':{type:String},
    'country': {type:String},
    'postalCode': {type:String}
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
    'rightId':{type: String, required: true},
    'projectName':{type: String,required: true},
    'type':{type: String,required: true},
    'name': {type: String,required: true},
    'title':{type: String,required: true},
    'description': {type: String,required: true},
    'img': {type: String,required: true},
    'assignTo':{type: String, required: true},
    'reportingOfficer':{type: String,required: true},
    'bugSatus':{type:String ,required: true},  // on , of ,(to be discussed or Not a bug) -->given by devloper only  
    'solution':{type:String ,required: true},
    'solimg': {type:String ,required: true},
    'EditTester': {type: Array}
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
       issueModel: IssueModel
}