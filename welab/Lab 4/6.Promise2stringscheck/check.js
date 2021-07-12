var promise = new Promise(
    function(myResolve , myReject){
        var str1 = "Sai";
        var str2 = "CSE";
        
     if(str1==str2){
         myResolve("Match");
     }
     else{
        myReject("Not a match");
     }
 });
 promise.then(
    function(value) {
        console.log(value);},
    function(error) {
        console.log(error);}
  );