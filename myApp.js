require('dotenv').config();
let express = require('express');
let app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.use("/public", express.static(__dirname + '/public/'));

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.send("{message :" + "Hello json".toUpperCase() + "}");
    } else {
        res.send({"message": "Hello Json"});
    }
});











 module.exports = app;
