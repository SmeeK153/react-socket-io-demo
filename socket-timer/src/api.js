import openSocket from 'socket.io-client';
const SOCKET = openSocket('http://localhost:8000');

const subscribeToTimer = (callback) => {
    SOCKET.on('timer', timestamp => callback(null, timestamp));
    SOCKET.emit('subscribeToTimer', 1000);
};

export {subscribeToTimer};