class user
{
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
    
    }
    userregister(){
        console.log(this.name);
            }
    

}
class member extends user{
    constructor(name,email,password,packages){
        super(name,email,password);
        this.packages=packages;
       
       
    }
    memregister(){
        console.log(this.name,this.packages);
            }
}
let  user1=new member("vinay","vinay@gmail.com",12344,9696);

user1.memregister();
user1.userregister();
let  user2=new member("rahul","rahul@gmail.com",138344,9696);

user2.memregister();
user2.userregister();
let  user3=new member("tarun","tarun@gmail.com",123454584,9696);

user3.memregister();
user3.userregister();
let  user4=new member("goutham","goutham@gmail.com",12344,9696);

user4.memregister();
user4.userregister();

