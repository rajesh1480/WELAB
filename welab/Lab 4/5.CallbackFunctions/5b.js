//5b
setTimeout(()=>{
    console.log("Func 1 ");    
    setTimeout(()=>{
        console.log("Func 2")},1000);        
},2000);
console.log("Welcome");