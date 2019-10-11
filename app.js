/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
const readline = require('readline');
const cmdProcess = require('./simulator/commands').processCmd;
const placeCmd = require('./simulator/commands').place;

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.prompt();
/**
     * To read from file or Terminal
     * @param  {String} line Line
     */

readLine.on('line', (line) => {
  let result = '';
  line = line.trim().toUpperCase();
  if (line.startsWith('PLACE ')) {
    result = placeCmd(line.substr(6));
    if (result === false) {
      console.log(`Invalid: ${line}`);
    }
    readLine.prompt();
  } else if (line === 'QUIT') {
    readLine.close();
  } else {
    result = cmdProcess(line);
    if (line === 'REPORT') {
      // console.log(`${JSON.stringify(result)} report`);
      console.log(`The Bus is now at: (${result.coordinates.x},${result.coordinates.y}), facing ${result.facing}`);
    }
    readLine.prompt();
  }
});

readLine.on('close', () => {
  process.stdout.write('Simulation Over');
  process.exit(0);
});
