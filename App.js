//main backend node server

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("Public"));
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/Index.html");
});

app.listen(5000, function(){
    console.log("server online on port 5000");
});