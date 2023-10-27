require('dotenv').config();
let express = require('express');
let app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.use("/public", express.static(__dirname + '/public/'));

app.get("/json", (req, res) => {
    console.log(process.env.MESSAGE_STYLE, "<=message style");
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message": "Hello json".toUpperCase()});
    } else {
        res.json({"message": "Hello json"});
    }
});









 module.exports = app;
