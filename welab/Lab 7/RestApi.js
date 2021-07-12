var express=require('express');
var app=express();
app.use(express.json());
const students=[{
    id:1,
    name:"Rajesh",
    email:"Rajesh@cvr.ac.in",
    phone:9999999999},
    {
        id:2,
        name:"Pal@Manoj",
        email:"Manoj@cvr.ac.in",
        phone:1111111111
    }];
app.get('/',(req,res)=>{
    res.send("welcome to rest API CRUD Development");
});
app.get('/students',(req,res)=>{
    res.send(students);
});

app.post('/students',(req,res)=>{
    const student={
        id:req.body.id,
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone
    }
    students.push(student);
    res.send(student);
});
app.put('/students/:id',(req,res)=>{
    const student=students.find((student)=>{
        return student.id === parseInt(req.params.id);
    });
    if(!student){
        res.status(404).send("students not found with given index");
    }
    student.name=req.body.name;
    student.email=req.body.email;
    student.phone=req.body.phone;
    res.send(student);
});

app.delete('/students/:id',(req,res)=>{
    const student=students.find((student)=>{
        return student.id === parseInt(req.params.id);
    });
    if(!student){
        res.status(404).send("students not found with given id");
    }
    var x=students.indexOf(student);
    students.splice(x,1);
    res.send(student);
});

app.listen(1234,()=>{
    console.log("server running");
})