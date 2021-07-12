var fs = require('fs');
fs.readFile('sample.txt', 'utf8', function(err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data);
});

