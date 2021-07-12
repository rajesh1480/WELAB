function greet(){
    console.log("Enjoy Programming");
}

function user(greet,name){
    console.log("Welcome to JavaScript",name);
    greet();
}

console.log("Type 1 : Passing func as parameter to another func")
user(greet,"Sai")
