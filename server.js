var express = require("express");
var app = express();
//Connect to server
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Server is up");

});