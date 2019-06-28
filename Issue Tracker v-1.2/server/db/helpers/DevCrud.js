const Model = require('../models/userSchema');
const userModel = Model.userModel;
const userMap = Model.mapModel;
const userRight = Model.rightModel;
const IssueModel = Model.issueModel;
const definedObj = require("../../utils/config");

var shortid = require('shortid');

const DevOperation = {
    assignIssue(userObject,response){
        IssueModel.find(userObject,(err,doc)=>{
        if(err){
            response.json({record: "No Issue found"});
        }else{

            response.json({record: doc});
        }
    })
    },
}

module.exports = DevOperation;