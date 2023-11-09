require('dotenv').config();
require('body-parser') = bodyParser;
const bodyParser = require('body-parser');
let express = require('express');
let app = express();


app.use(bodyParser.urlencoded({extended: false}));

app.use("/public", express.static(__dirname + '/public/'));

app.use((req, res, next) => {
    const string = `${req.method} ${req.path} - ${req.ip}`;
    console.log(string);
    next();
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message": "Hello json".toUpperCase()});
    } else {
        res.json({"message": "Hello json"});
    }
});

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({time: req.time});
});

app.get("/:word/echo", (req, res, next) => {
    const word = req.params.word;
    res.json({echo: word});
    next();
});

app.get("/name", (req, res, next) => {
    const { first: firstname, last: lastname } = req.query;
    res.json({ name: `${firstname} ${lastname}` });
    next();
});








 module.exports = app;
