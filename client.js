const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });
  conn.on('connect', () => {
    conn.write('Name: ERM');
  });
  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // });
  return conn;
};
module.exports = {connect};

//movement
// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)