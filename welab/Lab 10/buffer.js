var buf=Buffer.alloc(6)
// Read Data From Buffer
buf.write("abcd","ascii")
var i=0;
// Iterate Content of The bUffer
for(i=0;i<buf.byteLength;i++) console.log(buf[i]);
// Find the Length of The Buffer
console.log(buf.byteLength);
// Change Content of The Buffer
var buf2=Buffer.from("hello!","utf-8");
console.log(buf2.byteLength);
// Copy Content
console.log("Buffer 1= "+buf.toString());
console.log("Buffer 2= "+buf2.toString());
buf2.copy(buf);
console.log(buf.toString());
// console.log(buf2.toString());

