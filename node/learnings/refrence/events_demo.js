const EventEmitter = require('events')

// Craete calss 
class MyEmiiters extends EventEmitter { }

// Init object
const myEmitter = new MyEmiiters();

// Event listener
myEmitter.on('event', () => console.log('Event Fired'))

// Init event
myEmitter.emit('event')