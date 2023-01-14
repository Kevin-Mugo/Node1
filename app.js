const EventEmitter = require('events')

const customEmitter = new EventEmitter();

customEmitter.on('response' , (name ,id ) => {
    console.log(`Data has been received for user ${name} with id:${id}`);
})

customEmitter.on('response' , () => {
    console.log("Data has been read out");
})


customEmitter.emit('response' ,'John' , '001');