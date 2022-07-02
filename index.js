const express = require('express');
const app = express();
 
app.get("/", function(req, res, next) {
    res.end("Hello World!!!!!");
});
 
app.get("/hello", function(req, res, next) {
    res.end("Hello again!");
});
 
app.use(function (err, req, res, next) {
    println('Caught unhandled error: ', err);
    res.send({
        StatusCode: 500,
        StatusMsg: "An internal error occurred."
    });
});
 
process.on('uncaughtException', function (err) {
    if (!!err && !!err.stack) {
        console.log("UNCAUGHT EXCEPTION: " + err.stack);
    }
});
 
const DEFAULT_PORT = '8080';
app.listen(process.env.PORT || DEFAULT_PORT, function () {
    console.log("SERVER_START", "running on port =>", (process.env.PORT || DEFAULT_PORT));
});