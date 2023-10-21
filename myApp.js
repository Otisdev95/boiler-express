let express = require('express');
let app = express();
let path = require('require');

// console.log("Hello World");

// app.get("/", (req, res) => {
//     res.send('Hello Express');
// });

// app.get("/", (req, res) => {
//     res.sendFile(absolutePath = __dirname + '/views/index.html');
// });

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});




















 module.exports = app;
