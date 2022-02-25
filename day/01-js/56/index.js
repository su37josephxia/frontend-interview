// 发布者
class EventEmitter {
  constructor() {
    this.handlers = {};
  }

  on(eventName, callback) {
    if (!this.handlers) {
      this.handlers = {};
    }
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(callback);
  }

  emit(eventName, ...arg) {
    if (this.handlers[eventName]) {
      for (let callback of this.handlers[eventName]) {
        callback(...arg);
      }
    }
  }
}

// eventEmitter.on('done', (msg) => {
//   console.log('done',msg)
// })
// setTimeout(() => {
//   eventEmitter.emit('done',666)
// },600)

function delayLog(msg, cb) {
  setTimeout(() => {
    console.log(msg);
    cb && cb();
  }, 1000);
}

// m1 , m2  ,m3

const eventEmitter = new EventEmitter();
const list = ["m1", "m2", "m3","m4", "m5", "m6"];
// done => next
let i = 0;
eventEmitter.on("done", () => {
  delayLog(list[i], () => {
    if (i < list.length - 1) {
      i++;
      eventEmitter.emit("done");
    }
  });
});
eventEmitter.emit('done', list[i])
eventEmitter.emit('done', list[++i])
eventEmitter.emit('done', list[++i])