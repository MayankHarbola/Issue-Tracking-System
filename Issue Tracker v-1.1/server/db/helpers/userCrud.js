const Model = require('../models/userSchema');
const userModel = Model.userModel;

const userOperation = {

    // add(userObject,response){
    //     userModel.create(userObject,(err)=>{
    //         if(err){
    //          response.status(500).json({status:'S',message:'Record Not Added Due to Error'+ err});
    //         }else{
    //             // const mail = require('../../utils/mail');
    //         //  mail('Your account has been created...',`congratulaion ${userObject.userid} your account has been created `,userObject.emailId,response)
    //          response.status(200).json({status:'S',message:'Record Added'});
    //         }
    //     });
        
    //  },
    // adduser(userArray)  // for excel file upload
    // {    
       
    //         for(let userObject of userArray )
    //         {
    //             if(userObject.username != "")
    //             {
    //                 userModel.create(userObject,(err)=>
    //                 {
    //                     if(err)
    //                     {
    //                         console.log(typeof(userObject.username));
    //                         console.log({status:'S',message:'Record Not Added Due to Error'+ err});
    //                     }else{
    //                         console.log(userObject.username);

    //                         // const mail = require('../../utils/mail');
    //                     //  mail('Your account has been created...',`congratulaion ${userObject.userid} your account has been created `,userObject.emailId,response)
    //                     console.log({status:'S',message:'Record Added'});
    //                     }
    //                 });
                        
    //             }else {
    //                     break;
    //                 }
    //         }
    // },

    // userlist(response){  
    //     userModel.find({},(err,doc)=>{
    //         if(doc){
    //         response.status(200).json({status:'S',message:'All User List ',record:doc});
    //         }else{
    //             console.log("error is ....",err);
    
    //              response.json({status:'F',message:'Invalid Userid or Password',record: null});
    //         }
    //     })
    // },
    search(userObject,response){
        userModel.findOne(userObject,(err,doc)=>{
           if(doc){
               console.log("userObject is ",userObject, " doc is ", doc);
            response.status(200).json({status:'S',message:'Welcome '+doc.username,record:doc});
           }
           else{
            // console.log("Error is ",doc);

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

                const mail = require('../../utils/mail');
                var homePage = 'http://127.0.0.1:5500/client/index.html'
                mail('Your account has been created...',`congratulaion ${userObject.username} your are credentials are Succesfully Changed plz follow the link for further ${homePage}`,userObject.newemail,response);

                response.status(200).json({status:'S',message: "your usename and password has been changed Plz check you email",report: doc});
             }else{
                response.json({status:'S', message: "plz enter correct userid and password"})
             }
                
            }
        });
    },

  
}

module.exports = userOperation;