const EmitEvent = require('events');
let eventEmitter = new EmitEvent();

//Server side:- 
//on indicates what to do when event is triggered from client side
eventEmitter.on('MySimpleevent',(msg)=>{
    console.log(msg);
});

//Client side:-
//emit triggers the event
eventEmitter.emit('MySimpleevent',"First event has occured");