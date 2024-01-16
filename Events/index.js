const { EventEmitter } = require('events');
const { SAVE } = require('./event-names');

const emitter = new EventEmitter;

emitter.on(SAVE, () => {
    console.log('On save activated.');
});

emitter.emit('save');