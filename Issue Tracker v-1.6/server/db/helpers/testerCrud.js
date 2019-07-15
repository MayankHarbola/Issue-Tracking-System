const Model = require('../models/userSchema');
const userModel = Model.userModel;
const userMap = Model.mapModel;
const userRight = Model.rightModel;
const issueModel = Model.issueModel;
const definedObj = require('../../utils/config');
var shortid = require('shortid');

const TesterOpertation = {
    addIssue(userObject,response){

        issueModel.create(userObject,(err,doc)=>{
            if(err){
                console.log("Error is ",err);
                response.json({status: 'F',message: "Error in adding Issue"})
            }else{
                console.log("Issue is ",doc);
                response.json({status: 'S',message: "Issue added ..",data: doc});
            }
        })
    },

    getIssues(response){
       issueModel.find({},(err,docs)=>{
           if(err){
               console.log("Error is ",err)
               response.json({status: 'F'})
           }else{
             
               response.json({status: 'S',data: docs});
           }
       })
      },

      postIssue(userObject,response){
          console.log(userObject);
          issueModel.find({name: userObject.AssignedBy},(err,docs)=>{
           if(err){
            console.log("Error is ",err)
            response.json({status: 'F'})
           }else{
            response.json({status: 'S',data: docs});
           }
          })
        
      },
      singleIssue(userObject,response){
        issueModel.findOne({rightId : userObject.bugid},(err,doc)=>{
            if(err){
                console.log(err);
            }else{
            //    doc.img.data =  doc.img.data.toString('base64');
            //   console.log("single issue is ",doc);
            
                response.json({status: 'S',data: doc});
            }
        })
       }, 
       
       reopenDesc(userObject,response){
        issueModel.findOneAndUpdate(
            {rightId: userObject.rightId},
            {$push: {EditTester: userObject.reopenDesc},$set: {bugSatus: 'Reopen'}}, 
            {new: true}, 
            (err, doc) => {
              if(err){
                  console.log(err);
              }else{
                  response.json({message: "yahooo"})
              console.log("Doc is ...",doc);
              }
            })
       },

       closebug(userObject,response){
        issueModel.findOneAndUpdate(
            {rightId: userObject.rightId},
            {$set: {bugSatus: 'closed'}}, 
            {new: true}, 
            (err, doc) => {
              if(err){
                  console.log(err);
              }else{
                  response.json({message: "yahooo"})
              console.log("Doc is ...",doc);
              }
            })
       }
}

module.exports = TesterOpertation;