const multer = require('multer');
var xlstojson = require("xls-to-json-lc");
var xlsxtojson = require("xlsx-to-json-lc");
const userOperation = require("../db/helpers/userCrud");
const app = require('express').Router();


var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);

    }
});

var upload = multer({ //multer settings
    storage: storage,
    fileFilter : function(req, file, callback) { //file filter
        if (['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
            return callback(new Error('Wrong extension type'));
        }
        callback(null, true);
    }
}).single('file');


app.post('/upload', function(req, res) {
    var exceltojson;
    upload(req,res,function(err){
        if(err){
            res.json({'msg':'File Not Uploaded ....'});
             return;
        }
        /** Multer gives us file info in req.file object */
        if(!req.file){
            res.json({'msg':' No file passed ....'});
            return;
        }
        /** Check the extension of the incoming file and 
         *  use the appropriate module
         */
        if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
            exceltojson = xlsxtojson;
            res.json({'msg':'  file Uploaded ....'});
        } else {
            exceltojson = xlstojson;
            res.json({'msg':'  file Uploaded ....'});

        }
        console.log(req.file.path);
        try {
            exceltojson({
                input: req.file.path,
                output: null, //since we don't need output.json
                lowerCaseHeaders:true
            }, function(err,result){
                if(err) {
                    // return res.json({error_code:1,err_desc:err, data: null});
                    console.log('error is ',err);
                    return ;
                } 
                // console.log('data is ',result);
                userOperation.adduser(result);
            });
        } catch (e){
            res.json({error_code:1,err_desc:"Corupted excel file"});
        }
    })
   
});


module.exports = app;