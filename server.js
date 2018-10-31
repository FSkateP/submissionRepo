var express = require("express");
var app = express();
app.use(express.static(__dirname + '/View'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/Script'));
//use url  https://github.com/devlinpadayachee/  for https
var bodyParser = require("body-parser");


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//Connect to server
app.listen(8080, function () {
    console.log("Server is up");

});