
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// first listener 

myEmitter.on('event',()=>{
    console.log('happy new year');
})

// second listener 

myEmitter.on('event',arg1=>{
    console.log(`happy new year ${arg1}`);

})


myEmitter.emit('event', 2025);