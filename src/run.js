const child = require('child_process').exec('bsb', ['-color']);

child.stdout.on('data', (data) => {
  console.log(data.toString());
});
