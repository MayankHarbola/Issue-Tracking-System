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

    solution(userObject,response){
    //    console.log(userObject);

    IssueModel.findOneAndUpdate(
        {rightId: userObject.rightId},
        {$set:{solution: userObject.solution,bugSatus: userObject.bugSatus,solimg: userObject.solimg}}, 
        {new: true}, 
        (err, doc) => {
          if(err){
              console.log(err);
          }else{
          console.log("Doc is ...",doc);
          }
        })
    }
}

module.exports = DevOperation;