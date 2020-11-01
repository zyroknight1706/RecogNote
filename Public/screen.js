const webshot = require("webshot");

function takeshot() { 
    // const webshot = require("webshot");
    const optionselector = {
        captureSelector: '#drawing-board'
    };
    webshot("#", "scr.png", optionselector, function(err){
        if(!err){
            console.log("it works");
        } else { console.log(err) }
    });
}