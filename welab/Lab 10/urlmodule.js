var url = require('url');
var adr = 'http://localhost:8090/default.html?year=2021&month=april';
var d = url.parse(adr, true);
console.log(d.host);
console.log(d.pathname);
console.log(d.search);
var data = d.query;
console.log(data);
console.log(data.year);

