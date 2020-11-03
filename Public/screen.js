
// import { data } from "pdfkit/js/reference";
// var data = import("./data.js");
const pdfDoc = require('pdfkit');
var doc = new pdfDoc;
var Speech = ['this works?'];
doc.fontSize(10);

function makepdf(res){
    res.type( "pdf" ).attachment('test.pdf');
    console.log("its working here");
    doc.text(Speech[0], {
        width: 412,
        align: 'justify',
        indent: 30,
        columns: 2,
        height: 300,
        ellipsis: true
      });
    doc.end();
    var buffers = [];
    doc.on("data", function(chunk){
        buffers.push(chunk);
        // console.log(chunk.toString());
    });
    doc.on("end", function(){
        res.end(Buffer.concat(buffers), 'binary');
    });
}
exports.makepdf = makepdf;
exports.doc = doc;
// stream.on("finish", function(){
//     //const blob = stream.toBlob('application/pdf');

//     const url = stream.toBlobURL('application/pdf');
//     iframe.src = url;
// });
// fs.createReadStream("Output.pdf",{encoding: 'binary'})