const EventEmitter=require('events');
const emitter=new EventEmitter();
emitter.on('saved',(arg)=>{
    console.log(`A saved event occured:- name: ${arg.name}, id: ${arg.id}`);
});
emitter.emit('saved',{
    id:10,
    name:'Sai Rahul'
});