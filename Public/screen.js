
// import { data } from "pdfkit/js/reference";
// var data = import("./data.js");
const pdfDoc = require('pdfkit');
var doc = new pdfDoc;

doc.fontSize(10);

function makepdf(res){
    res.type( "pdf" ).attachment('test.pdf');
    console.log("its working here");
    // for(var i = 0; i < data.count; i++){
    // doc.text(data.Speech[i],20,0);
    // console.log("it should work till here");//lets see if it is wrorking at this point of time
    // doc.image(data.ImageURLs[i],0,0,{width: 200, height: 100});
    // }
    doc.end();
    var buffers = [];
    doc.on("data", function(chunk){
        buffers.push(chunk);
        console.log(chunk.toString());
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