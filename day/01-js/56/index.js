
// 发布者
class EventEmitter {
  constructor() {
    this.handler = {};
  }
  on(eventName, callback) {
    if (!this.handles) {
      this.handles = {};
    }
    if (!this.handles[eventName]) {
      this.handles[eventName] = [];
    }
    this.handles[eventName].push(callback);
  }
  emit(eventName, ...arg) {
    if (this.handles[eventName]) {
      for (var i = 0; i < this.handles[eventName].length; i++) {
        this.handles[eventName][i](...arg);
      }
    }
  }
}


function delayLog(msg, cb) {
  setTimeout(() => {
    console.log(msg);
    cb && cb();
  }, 1000);
}

const list = ["m1", "m2", "m3", "m4","m5"];

const emitter = new EventEmitter();
let i = 0;
emitter.on("done", () =>
  delayLog(list[i], () => {
    if (i < list.length - 1) {
      i++;
      emitter.emit("done");
    }
  })
);
emitter.emit("done", list[i]);
// emitter.emit("done", list[i++]);