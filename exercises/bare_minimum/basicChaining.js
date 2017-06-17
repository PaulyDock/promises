/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var pluckFirstLineFromFileAsync = require('./promiseConstructor').pluckFirstLineFromFileAsync
var getGitHubProfileAsync = require('./promisification').getGitHubProfileAsync;
var writeFileAsync = Promise.promisify(require('fs').writeFile);


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {

  return pluckFirstLineFromFileAsync(readFilePath)
    .then(getGitHubProfileAsync)
    .then(function(writeFilePath) => {
      writeFileAsync(writeFilePath, 
    }


  // var options = {
  //   url: 'https://api.github.com/users/' + user,
  //   headers: { 'User-Agent': 'request' },
  //   json: true  // will JSON.parse(body) for us
  // };

  // return new Promise(function(res, rej) {
  //   request.get(options, function(err, response, body) {
  //     return 
  //   });
};


// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
