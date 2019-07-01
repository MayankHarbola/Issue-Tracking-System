const multer = require('multer');
var xlstojson = require("xls-to-json-lc");
var xlsxtojson = require("xlsx-to-json-lc");
const AdminOperation = require("../db/helpers/adminCrud");
const DevOperation = require("../db/helpers/DevCrud");

const app = require('express').Router();

app.post('/assignissue',(req,res)=>{
    var json = req.body;
    DevOperation.assignIssue(json,res);
})

// *******************************MULTER CONFIG***************************
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


app.post('/solution',upload.single('file'),(req,res)=>{
  var json = req.body;
  console.log(json);
  json.solimg = req.file.path;  
  
    DevOperation.solution(json,res);
  })

module.exports = app;