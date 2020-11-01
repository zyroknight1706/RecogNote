//main backend node server
//const webshot = require('node-webshot');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var PdfPrinter = require('pdfmake');
var printer = new PdfPrinter(fonts);
var fs = require('fs');
app.use("/Public", express.static(__dirname+"/Public/"));
// app.use(express.urlencoded({extended:true}));
// app.use(express.json);
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/Index.html");
});

// app.post("/", function(req, res){
//     // var canvas = document.querySelector("#drawing-board");

//     // const url = canvas.toDataURL();
//     // webshot(__dirname+"/index.html", "pic1.png", {siteType:"file", captureSelector: '#drawing-board'}, function(err){
//     //     if(err) return;
//     //     console.log("kheech li photo");
//     // });
// });

app.listen(5000, function(){
    console.log("server online on port 5000");
});

