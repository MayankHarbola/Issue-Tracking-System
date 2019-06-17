const Model = require('../models/userSchema');
const userModel = Model.userModel;
const rightModel = Model.rightModel;

const adminOperation = {
    rights(response){
    rightModel.find({},(err,doc)=>{
        if(doc){
            console.log(doc);
            response.status(200).json({status:'S',right:doc});
        }else{
            response.json({status:'S',right:"Error in getting Rights"});
        }

    })


    },
    
    add(userObject,response){
        userModel.create(userObject,(err)=>{
            if(err){
             response.status(500).json({status:'S',message:'Record Not Added Due to Error'+ err});
            }else{
            //     const mail = require('../../utils/mail');
            //  mail('Your account has been created...',`congratulaion ${userObject.userid} your account has been created `,userObject.emailId,response)
             response.status(200).json({status:'S',message:'Record Added'});
            }
        });
        
     },
    

    userlist(response){   // finding all user in admin pannel
        userModel.find({},(err,doc)=>{
            if(doc){
            response.status(200).json({status:'S',message:'All User List ',record:doc});
            }else{
                console.log("error is ....",err);
    
                 response.json({status:'F',message:'Invalid Userid or Password',record: null});
            }
        })
    },
    

    edit(userObject,response){
        userModel.findOneAndUpdate({username: userObject.username, password: userObject.password
        }, {$set:{username: userObject.newname,email: userObject.newemail,password: userObject.newpwd,firsttym: userObject.firsttym,usertype: userObject.newtype}}, {new: true}, (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!");
               
            }
            else{
                
             if(doc){

                // const mail = require('../../utils/mail');
                // var homePage = 'www.google.com'
                // mail('Alert!! Your Crednetial are changed by Admin',`Hello ${userObject.username} your are credentials are Changed by admin  ${homePage}`,userObject.newemail,response);

                response.status(200).json({status:'S',message: "Successfully Added",report: doc});
             }else{
                response.json({status:'S', message: "plz enter correct userid and password"})
             }
                
            }
        });
    },


    delete(userObject,response){
        userModel.deleteOne(userObject, function(err,result) {
            if (err) {
                    response.json({message:"error in deleting data"});
                    console.log("Error is",err);
            }
            else {
                response.json({message:"succefully delted record"});
                console.log("Data is",result);
                    
            }
        });
    },


    adduser(userArray)  // for excel file upload
    {    
       
            for(let userObject of userArray )
            {
                if(userObject.username != "")
                {
                    userModel.create(userObject,(err)=>
                    {
                        if(err)
                        {
                            console.log(typeof(userObject.username));
                            console.log({status:'S',message:'Record Not Added Due to Error'+ err});
                        }else{
                            console.log(userObject.username);

                            // const mail = require('../../utils/mail');
                        //  mail('Your account has been created...',`congratulaion ${userObject.userid} your account has been created `,userObject.emailId,response)
                        console.log({status:'S',message:'Record Added'});
                        }
                    });
                        
                }else {
                        break;
                    }
            }
    },
}

module.exports = adminOperation;