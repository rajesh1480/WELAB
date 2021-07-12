const fs = require('fs')

const content = '1.This line is added into the file using writeFile method!'

fs.writeFile('file.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }


});
fs.appendFile('file.txt', '2.This line is appended to using appendFile method', (err) => {
    if (err) {
        throw err;
    }
    console.log("File is updated.");
});

fs.rename('file.txt', 'file1.txt', (err) =>{
    if (err) {
        throw err;
    }
    
    console.log('File Renamed');
  });

  fs.unlink('file1.txt', function (err) {
    if (err) throw err;    
    console.log('File deleted!');
});