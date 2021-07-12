var st1 = require('./exportliteral.js');
console.log(st1);

var st2 = require('./exportobject.js');
console.log(st2.obj);

var st3 = require('./exportfunc.js');
st3('Function ');

var st4 = require('./exportfuncclass.js');
var p1 = new st4('class', 'exported');
console.log(p1.full());



