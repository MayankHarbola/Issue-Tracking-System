const userRoutes = require('express').Router();
const userOperation = require('../db/helpers/userCrud');
const multer = require('multer');

userRoutes.post('/register',(req,res)=>{
    const json = req.body;
 
     const userCrud = require('../db/helpers/userCrud');
     userCrud.add(json,res);
 })

userRoutes.get('/check',(req,res)=>{
    userOperation.check(res);
})

userRoutes.post('/login',(req,res)=>{
     const json = req.body;
     userOperation.search(json,res);
})

userRoutes.post('/chngPwd',(req,res)=>{
    const json = req.body;
    userOperation.chngPwd(json,res);

})
userRoutes.post('/getprofile',(req,res)=>{
  const json = req.body;
  userOperation.getProfile(json,res);

})


// ******************Multer config***************************

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log('Going to Store the Data in Disk');
      cb(null, './uploads')   // upload file Location
    },
    filename: function (req, file, cb) {
      console.log('File name is ',file.fieldname);
      cb(null, file.fieldname + '-' + Date.now()+".jpg")
    }
  })

  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });

  userRoutes.post('/updateProfile',upload.single('file'),(request, response)=>{
    
    
    var json = request.body;   
    json.img = request.file.path;
    
    console.log(json)
   
    userOperation.updateProfile(json,response);     
        
  })

// userRoutes.get('/userlist',(req,res)=>{
    
//     userOperation.userlist(res);

// })

module.exports = userRoutes;