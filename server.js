var express = require('express');
var app = express.createServer();

app.use(express.logger());

app.use("/css", express.static(__dirname + '/client/css'));
app.use("/js", express.static(__dirname + '/client/js'));
app.use("/img", express.static(__dirname + '/client/img'));
app.use('/', express.static(__dirname + '/client/html'));

app.on('close', function() {
    cn.disconnect();
});

app.listen(process.env.PORT);