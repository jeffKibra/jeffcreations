const express = require("express");
const bodyParser = require("body-parser");
const EventEmitter = require("events").EventEmitter;
const path = require("path");

const app = express();
var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var users = [];
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'about.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'userlogin.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'signup.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'register.html'));
});

app.post('/api/users', (req, res) => {
    var user = {
        fname: req.body.firstName,
        sname: req.body.surName,
        uname: req.body.userName,
        email:req.body.email
    }
    users.push(user);
    return res.send(users);
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});