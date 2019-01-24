const io = require('socket.io')();
const PORT = 8000;

io.on('connection', (client) => {
    // emit events here
});

io.listen(PORT);
console.log(`Listening on port ${PORT}`);