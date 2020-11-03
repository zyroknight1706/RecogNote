//main backend node server
const express = require("express");
const fs = require('fs');
const app = express();
//const pdfdoc = require("pdfkit");
//const fs = require('fs');
// const blobStream = require("./blob-stream.js");

// var doc = import('./Public/screen.js');

// var pdfMake = require('pdfmake/build/pdfmake.js');
// var pdfFonts = require('pdfmake/build/vfs_fonts.js');
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

app.use("/Public", express.static(__dirname+"/Public/"));
// app.use(express.urlencoded({extended:true}));
// app.use(express.json);
const pdf = require('./Public/screen.js');
//let {makepdf} = pdf;
// import {makepdf} from './Public/screen.js';
//let makepdf = pdf;
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/Index.html");
});

app.post("/success", function(req,res){
    // var win = window.open('', "_blank");
    pdf.makepdf(res);
});

app.listen(5000, function(){
    console.log("server online on port 5000");
});



//5077227d2221405ebd13427d6a6c5e4a