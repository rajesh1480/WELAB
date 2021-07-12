
// Array Destructing 
var rock=["rajesh","rahul","rohan"];
var [a,b,c]=rock;
console.log(a);
console.log(b);
console.log(c);

// Object Destructing

let user={
    id:52,
    verified:true,
    s:{
        rollno:"5f2",
        branch:"cse"
    }
}
let {id,verified,s}=user;
console.log(id);
console.log(verified);
console.log(user);
console.log(s.rollno);
console.log(s.branch);
function obj(user){
    return user;
}
console.log(obj(user));


// Rest

var a=["Joe","GoldBerg", "Chanandler","Bong"]
let [firstname,lastname , ...other]=a
console.log(firstname)
console.log(lastname)
console.log(other)