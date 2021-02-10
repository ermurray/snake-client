const { stdin } = require('process');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;
};

const handleUserInput = function() {
  stdin.on('data', (key) => {
    // if (key === '\u0003') {
    //   process.exit();
    // }
    switch (key) {
    case 'w':
      console.log('w');
      break;
    case 'a':
      console.log('a');
      break;
    case 's':
      console.log('s');
      break;
    case 'd':
      console.log('d');
      break;
    case '\u0003':
      process.exit();
    }
  });
};

module.exports = { setupInput };