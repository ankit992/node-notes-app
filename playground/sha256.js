var crypto = require('crypto');

var hash = crypto.createHash('sha256').update('calculateMYHash').digest('hex');
console.log(hash);
console.log('7c9eb39e180051892391afdaa7f0cfc91741dd1c59bb0c2ddd6e5a45328eef68');