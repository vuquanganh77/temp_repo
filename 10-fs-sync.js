const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

// console.log(first + '\n'+ second);

writeFileSync('./content/second.txt',`Here is the result : ${first}`);
writeFileSync('./content/result-sync.txt','\n abc', {flag: 'a'});
console.log('done');
console.log('starting the next task');