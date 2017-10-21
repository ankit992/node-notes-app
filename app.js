console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
var res = notes.add(5, 2);

console.log(res);
// var user = os.userInfo();

// console.log(user.username)
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age} \n`);
