function find(n){
    return new Promise((x,y)=>{
        if(!isNaN(Math.abs(n))){
            x("Is a NUMBER");
        }
        else{
            y("Is NOT A NUMBER");
        }})
}
async function output(){
        return await find("5");
    }
    output().then(function(a){
        console.log(a);
    }).catch(function(a){
        console.log(a);
});