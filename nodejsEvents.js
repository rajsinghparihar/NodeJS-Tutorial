const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

myEmitter.on('AtcoderContest', () => {
    console.log('contest started!!');
    setTimeout(()=> {
        console.log('Contest Started 3 secs ago... Ab toh dede bsdk!!');
    }, 3000);
}
);

console.log('code is running!');
// emitting this event runs the code above....
// detects whether the event 'AtcoderContest' has been triggered
// or not. if yes, then run the function passed in it.

// myEmitter.on('event',function() => {function code});
// myEmitter.emit('event'); -> emits the event named 'event'
myEmitter.emit('AtcoderContest');

// now we build http server using the http module
