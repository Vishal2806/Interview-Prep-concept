const fs = require('fs');
fs.writeFileSync('notes.txt', 'This file was created by .js ');
fs.appendFileSync('notes.txt', 'This is an appended text');