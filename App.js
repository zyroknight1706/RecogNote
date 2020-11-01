//main backend node server
//const webshot = require('node-webshot');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// var PdfPrinter = require('pdfmake');
// var printer = new PdfPrinter(fonts);
var fs = require('fs');
const sdk = require("microsoft-cognitiveservices-speech-sdk");
const speechConfig = sdk.SpeechConfig.fromSubscription("88702d7d-b4e8-49a9-925a-c6a5298af91b", "eastus");
const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
speechConfig.speechRecognitionLanguage = "en-IN";
const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);
recognizer.recognizing = function(s,e){
    console.log(`RECOGNIZING: Text=${e.result.text}`);
};
recognizer.recognized = function(s,e){
    if (e.result.reason == ResultReason.RecognizedSpeech) {
        console.log(`RECOGNIZED: Text=${e.result.text}`);
    }
    else if (e.result.reason == ResultReason.NoMatch) {
        console.log("NOMATCH: Speech could not be recognized.");
    }
}

recognizer.canceled = function(s, e){
    console.log(`CANCELED: Reason=${e.reason}`);

    if (e.reason == CancellationReason.Error) {
        console.log(`"CANCELED: ErrorCode=${e.errorCode}`);
        console.log(`"CANCELED: ErrorDetails=${e.errorDetails}`);
        console.log("CANCELED: Did you update the subscription info?");
    }

    recognizer.stopContinuousRecognitionAsync();
};

recognizer.sessionStopped = function(s, e){
    console.log("\n    Session stopped event.");
    recognizer.stopContinuousRecognitionAsync();
};



app.use("/Public", express.static(__dirname+"/Public/"));
// app.use(express.urlencoded({extended:true}));
// app.use(express.json);
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/Index.html");
    recognizer.startContinuousRecognitionAsync();
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

