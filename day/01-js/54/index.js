



function delayLog(msg, cb) {
  setTimeout(() => {
    console.log(msg);
    cb && cb();
  }, 1000);
}

function* foo() {
    console.log('p1')
    yield 1
    console.log('p2')
    yield 2
    console.log('p3')
    return 'end'
}

let gen = foo()

console.log('==next===', gen.next())
console.log('==next===', gen.next())
console.log('==next===', gen.next())

gen = foo()
for(let item of gen) {
    console.log('for of ',item)
}








