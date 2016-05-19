'use strict';

const childProcess = require('child_process');
const chalk = require('chalk');
const http = require('http');

function run () {
  runBackEnd();
  runFrontEnd();
}

function runFrontEnd () {
  childProcess.fork('./lib/server/server.js');
    console.log(chalk.green('Front end running on port 3030'));
}

function runBackEnd () {
  childProcess.fork('../sky-service/bin/www');
    console.log(chalk.green('Back end running on port 3000'));
}

module.exports = {
  run: run
};
