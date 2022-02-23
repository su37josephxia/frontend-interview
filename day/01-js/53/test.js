function delayLog(msg, cb) {
  setTimeout(() => {
    console.log(msg);
    cb();
  }, 1000);
}

// delayLog("cb1", () => {
//   delayLog("cb2", ()=> {
//       delayLog('cb3')
//   });
// });

const delayLogPromise = msg => {
    return new Promise(resovle => {
        delayLog(msg, resovle)
    })
}

delayLogPromise('p1')
.then(() => delayLogPromise('p2'))
.then(() => delayLogPromise('p3'))
.then(() => delayLogPromise('p4'))



