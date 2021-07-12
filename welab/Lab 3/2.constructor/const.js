var c=0;
class user
{
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
        


    }
    register(){
console.log(this.name,this.email,this.password,c);


    }
    usercount(){
        c=c+1;
    }

}
let  user1=new user("vinay","vinay@gmail.com",12344);
user1.usercount();
user1.register();
let  user2=new user("rahul","rahul@gmail.com",138344);
user1.usercount();
user2.register();
let  user3=new user("tarun","tarun@gmail.com",123454584);
user1.usercount();
user3.register();
let  user4=new user("goutham","goutham@gmail.com",12344);
user1.usercount();
user4.register();

