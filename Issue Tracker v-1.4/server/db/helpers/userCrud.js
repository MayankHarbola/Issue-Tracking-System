const Model = require('../models/userSchema');
const userModel = Model.userModel;
const userMap = Model.mapModel;
const userRight = Model.rightModel;
const definedObj = require('../../utils/config');
var shortid = require('shortid');


const userOperation = {
     check(response){
         userModel.findOne({},(err,doc)=>{
             if(doc){
                 response.json({message: "user is there"})
             }else{
                 userModel.create(definedObj.userobject,(err)=>{
                     if(err){
                        response.json({status:'S',message:'Record Not Added Due to Error'+ err});
                     }else{
                        response.json({status:'S',message:'Record Added'});
                     }
                 })
             }
         })
     },
    
     search(userObject,response){
        userModel.findOne(userObject,(err,doc)=>{
           if(doc)
           {
                console.log("userObject is ",userObject, " doc is ", doc);

                if(doc.firsttym)
                {
                    CreateUserMapSchema(doc,response);
                }else{
                    returnRight(doc,response);
                }
            }
           else{
               console.log("error is ....",err);
               console.log(userObject);
                response.json({status:'F',message:'Invalid Userid or Password',record: null});          
           }   
    })
    },

    chngPwd(userObject,response){
        userModel.findOneAndUpdate({username: userObject.username, password: userObject.password
        }, {$set:{username: userObject.newname,email: userObject.newemail,password: userObject.newpwd,firsttym: false}}, {new: true}, (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!");
               
            }
            else{
                
             if(doc){
            if(userObject.username == "admin" && userObject.password == "admin"){
                 CreateRightSchema(doc,response);
            }
                // const mail = require('../../utils/mail');
                // var homePage = 'http://127.0.0.1:5500/client/index.html'
                // mail('Your account has been created...',`congratulaion ${userObject.username} your are credentials are Succesfully Changed plz follow the link for further ${homePage}`,userObject.newemail,response);
               
             }else{
                response.json({status:'S', message: "plz enter correct userid and password"})
             }
                
            }
        });
    },

  
}


function CreateUserMapSchema(doc,response){
    userMap.create({'userId': doc.userId,'rightId': "RI"+shortid.generate()},(err)=>{
        if(err){
            console.log("Error in creating userMap collection",err);
            
        }else{
            console.log("userMap succefully Created");
            response.status(200).json({status:'S',record:doc});
        }
    });
}

function returnRight(doc,response){
    userMap.findOne({userId: doc.userId},(err,right)=>{
        if(right){
            userRight.findOne({rightId: right.rightId},(err,right)=>{
                response.status(200).json({status:'S',right: right ,record:doc});
            });
        }
    })
}

function CreateRightSchema(doc,response){
    userMap.findOne({userId: doc.userId},(err,doc)=>{
        if(doc){
            definedObj.AdminRight.rightId = doc.rightId;
            // console.log("documnet is ",doc," userRight object is ",definedObj.AdminRight);
            userRight.create(definedObj.AdminRight,(err)=>{
                if(err){
                    console.log("Error in creating userRight",err);

                }else{
                    console.log("userRight succesfully Created ....");
                    response.json({status:'S',report: definedObj.AdminRight});

                }
            })
        }else{
            console.log("Error in creating Right Schema ",err);
        }
    })
}

module.exports = userOperation;