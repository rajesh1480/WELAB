var rest=[1,2,3,4,5];
var [a,b,...c]=rest;
console.log(a);
console.log(b);
console.log(c);

function divideNumbers(dividend, divisor){
    var quotient = dividend / divisor;
    var arr = [dividend, divisor, quotient];
    return arr;
}
var all = divideNumbers(10, 2);

console.log(all[0]); 
console.log(all[1]); 
console.log(all[2]);

function name(fname,lname){
    var r=[fname,lname];
    return r;
}

var all=name("rajesh","kumar");
console.log(all[0]);
console.log(all[1]);