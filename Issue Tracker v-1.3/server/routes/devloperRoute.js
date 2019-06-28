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


module.exports = app;