var app = require("express")();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.get("/test", function(req, res) {
    res.send("test successful");
});

app.get("/home", function(req, res) {
    res.sendFile(__dirname + '/home.html');
});

app.post("/data", function(req, res) {
    console.log(req.body);
    res.send("all good");
});

app.listen("3000", function() {
    console.log("server now listening");
});