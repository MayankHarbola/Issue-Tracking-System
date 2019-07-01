const nodemailer= require("nodemailer");
// const logger = require("../utils/logger");
function sendemails(subject,message,receipents,response){
nodemailer.createTestAccount((error,account)=>{
    let trans = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: '',   
            pass: '',  //enable less secure app access setting from google // also Disable Captcha if required
        }
    });
    let mailOption={
        from:'',   //sender address
        to:receipents,
        subject:subject,
        text:message
    };
    trans.sendMail(mailOption,(error,info)=>{
        console.log("info***********************************************",info);
        console.log('error is ************************ ',error);

        // logger.debug("error is************",info)
        if(error){
            console.log('error is ',error);
            response.send('cant send mail some error');
        //   logger.debug("error aa gya", error);
        }
        else{
            response.send('conrats account has been created,check mail information...');
        }
            })
});

}
module.exports =sendemails;