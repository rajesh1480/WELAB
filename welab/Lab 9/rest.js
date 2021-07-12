var rest=[41,42,43,44,45];
var [a,b,...c]=rest;
console.log(a);
console.log(b);
console.log(c);

function divideNumbers(dividend, divisor){
    var q = dividend / divisor;
    var a = [dividend, divisor, q];
    return a;
}
var all = divideNumbers(20, 2);

console.log(all[0]); 
console.log(all[1]); 
console.log(all[2]);

function name(first,last){
    var ans=[first,last];
    return ans;
}

var all=name("sai","rahul");
console.log(all[0]);
console.log(all[1]);