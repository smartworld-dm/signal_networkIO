"use strict";
exports.__esModule = true;
var socketio = require("socket.io");
var express = require("express");
var os = require("os");
var path = require("path");
var port = process.env.PORT || 8080;
var env = process.env.NODE_ENV || 'development';
var app = express();
app.set('port', port);
app.set('env', env);
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
// app.use(express.static(__dirname + '../dist/index.html'));
var router = express.Router(); // get an instance of the express Router
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + 'index.html'));
    // res.sendFile(path.join(__dirname + '../dist/apps/intercept/index.html'));
    // res.send('backend');
});
router.get('/stats', function (req, res) {
    res.json(getServerStats());
});
router.get('/room/:frq/stats', function (req, res) {
    if (io.sockets.adapter.rooms[req.params.frq]) {
        res.json(getFrqStats(req.params.frq));
    }
    else {
        res.status(404);
    }
});
app.use('/', router);
var server = app.listen(app.get('port'), function () {
    console.log('Signal server listening on port ' + app.get('port'));
});
var io = socketio(server, { origins: '*:*' });
var escapeHtml = function (text) {
    if (text === void 0) { text = ''; }
    return text
        .replace(/&/g, '&amp;')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')
        .replace(/'/g, '&quot;');
};
var snapshots = {};
setInterval(function () {
    var message = {
        timestamp: Date.now()
    };
    io.emit('report', message);
}, 2000);
io.on('connection', function (client) {
    console.log('client connected...:' + client);
    snapshots[client.id] = {
        number: -1,
        position: 0,
        report_timestamp: Date.now(),
        current_timestamp: Date.now()
    };
    client.on('signal', function (data) {
        console.log(data);
        var message = {
            signal: data,
            timestamp: Date.now()
        };
        if (data === 'reset') {
            for (var key in snapshots) {
                snapshots[key] = {
                    number: -1,
                    position: 0,
                    report_timestamp: Date.now()
                };
            }
        }
        console.log('----------message---------------' + JSON.stringify(message));
        io.emit('signal', message);
    });
    client.on('join', function (data) {
        console.log(data);
        io.emit('statsUpdate', getServerStats());
    });
    client.on('log', function (data) {
        console.log('data=' + JSON.stringify(data));
        console.log('socket id = ' + client.id);
        for (var key in snapshots) {
            console.log('-------------------key-----------------------------' + key);
            var value = snapshots[key];
        }
    });
    client.on('report_time', function (data) {
        var max_position = 0;
        var all_reported = true;
        var update_timestamp = data.current_timestamp;
        snapshots[client.id].report_timestamp = data.report_timestamp;
        snapshots[client.id].number = data.number;
        snapshots[client.id].position = data.position;
        snapshots[client.id].current_timestamp = data.current_timestamp;
        var position_list = [];
        var timestamps = [];
        for (var key in snapshots) {
            console.log('-------------------key-----------------------------'
                + JSON.stringify(data));
            var message = snapshots[key];
            var number = message.number;
            position_list.push(message.position);
            timestamps.push(message.current_timestamp);
            if (max_position < message.position) {
                max_position = message.position;
                update_timestamp = message.current_timestamp;
            }
            if (message.report_timestamp != data.report_timestamp && number != -1) {
                console.log(message.report_timestamp);
                console.log(data.report_timestamp);
                console.log(key);
                console.log(client.id);
                console.log(number);
                console.log(message.position);
                console.log(data.position);
                all_reported = false;
                break;
            }
        }
        console.log('--------all_reported-------- ' + all_reported);
        console.log('--------max_position-------- ' + max_position);
        console.log('-------position_list---------' + position_list);
        console.log('timestamps=' + timestamps);
        if (all_reported == true) {
            var adjust_obj = {
                position: max_position,
                report_timestamp: data.report_timestamp,
                update_timestamp: update_timestamp
            };
            console.log('-----------adjust_obj---------' + JSON.stringify(adjust_obj));
            io.emit('adjust_time', adjust_obj);
        }
    });
    client.on('leave', function (data) {
        console.log('leave', data);
        client.leave(data.frq);
        client.disconnect(true);
        client.to(data.frq).emit('frqUpdate', getFrqStats(data.frq));
        io.emit('statsUpdate', getServerStats());
    });
    client.on('send', function (data) {
        console.log(data);
        io.emit('send', data);
    });
    client.on('disconnect', function () {
        delete snapshots[client.id];
        // TODO: optimize
        Object.keys(io.sockets.adapter.rooms).map(function (frq) {
            io.to(frq).emit('frqUpdate', {
                frq: frq,
                clientsCount: Object.keys(io.sockets.adapter.rooms[frq].sockets).length
            });
        });
        io.emit('statsUpdate', getServerStats());
    });
    client.emit('host', os.hostname());
});
function getServerStats() {
    return {};
}
function getFrqStats(frq) {
    return {
        frq: frq,
        clientsCount: io.sockets.adapter.rooms[frq]
            ? io.sockets.adapter.rooms[frq].length
            : 0
    };
}
