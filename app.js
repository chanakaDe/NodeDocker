var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cors = require('cors');

app.use(cors());

server.listen(8080, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log("Server listening on port 8080");
    }
});

app.get('/operateLight', function (req, res) {
    var light = req.param('lightVal');
    var status = req.param('lightStatus');
    console.log(light);
    console.log(status);
    res.json({light_value: light, light_status: status});

    io.emit('light1', {light: light, status: status});
});
