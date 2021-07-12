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
