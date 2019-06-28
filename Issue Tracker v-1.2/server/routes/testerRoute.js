const multer = require('multer');
var xlstojson = require("xls-to-json-lc");
var xlsxtojson = require("xlsx-to-json-lc");
const IssueOperation = require("../db/helpers/testerCrud");
const app = require('express').Router();
var shortid = require('shortid');
var fs = require('fs');


  app.post("/singleissue",(req,res)=>{
    const json = req.body;
    IssueOperation.singleIssue(json,res);
})



app.get("/getIssue",(req,res)=>{
    IssueOperation.getIssues(res);
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

  app.post('/uploadIssue',upload.single('file'),(request, response)=>{
    // console.log("req file name is ",request.file);
    // console.log('Server Upload ......');
    
    //     response.json({path: request.file.path});
    console.log("hulu hulu");
    var json = request.body;
    json.rightId = 'BI'+ shortid.generate();
    json.bugSatus = 'open';
    json.img = {};
    json.img.data = fs.readFileSync(request.file.path);
    json.img.contentType = 'image/png';
    
    IssueOperation.addIssue(json,response);
          
        
  })


module.exports = app;