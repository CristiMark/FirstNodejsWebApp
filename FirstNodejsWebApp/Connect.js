var connect = require("connect");
var http = require("http");

var port = process.env.PORT || 1337;

var app = connect();

function profile() {
    console.log('User requered profile');
}

function form() {
    console.log('User requered form');
}

app.use('/profile', profile);
app.use('/form', form);


http.createServer(app).listen(port);
console.log("Server is runing");