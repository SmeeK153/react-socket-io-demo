const io = require('socket.io')();
const PORT = 8000;

io.on('connection', (client) => {
    client.on('subscribeToTimer', (interval) => {
        console.log(`Client is subscribing to timer at the interval ${interval}.`);
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    });
});

io.listen(PORT);
console.log(`Listening on port ${PORT}.`);