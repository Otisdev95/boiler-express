let express = require('express');
let app = express();

// console.log("Hello World");

// app.get("/", (req, res) => {
//     res.send('Hello Express');
// });

// app.get("/", (req, res) => {
//     res.sendFile(absolutePath = __dirname + '/views/index.html');
// });

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

module.export = app;






















 module.exports = app;
