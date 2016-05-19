const karma = require('karma');
const deferred = require('q').defer();

function run () {
  const server = new karma.Server({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      '**/*.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['nyan'],
    port: 9876,
    colors: true,
    logLevel: 'error',
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  }, (exitCode) => deferred.resolve(exitCode));

  server.start();
  return deferred.promise;
}

module.exports = {
  run: run
};
