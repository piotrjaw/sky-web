'use strict';

const chalk = require('chalk');
const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  // if (request.url.split('/')[1] === 'service') {
  //   request.url = 'http://127.0.0.1:3000' + request.url;
  //   http.request(request)
  //     .then(function (res) {
  //       response.writeHead(res.status);
  //       response.end(res.data);
  //     });
  // } else {
    let filePath = '.' + request.url;
    if (filePath === './') {
      filePath = './index.html';
    }

    fs.readFile(filePath, (error, content) => {
      if (error) {
        response.writeHead(404);
        response.end('Not found!');
      } else {
        response.writeHead(200);
        response.end(content);
      }
    });
  // }
}).listen(3030);

chalk.green('Front end running on port 3030');
