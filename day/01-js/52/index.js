// 求值策略
// 函数被调用前其参数的值就已经被编译器给算好了，每次调用函数都会用同样的参数值。
// 传值调用 call by value
// const total = 1 + 2

// // 传名调用 call by name
// const sum = () => 1 + 2

// thunk其实就是把惰性函数包装一个Thunk函数
// 先调这个辅助函数求出参数值，再进入函数主体
// 1 : total = 1 + 2
// 2 : total = (() => 1 + 2)()

// Thunk函数早在上个世纪60年代就诞生了。
// 那时，编程语言刚刚起步，计算机学家还在研究，
// 编译器怎么写比较好。一个争论的焦点是"求值策略"，即函数的参数到底应该何时求值。

// Thunk叫做传值调用 (call by value)

// 传值调用 与传名调用

// 传值调用相当于惰性取值
// 将取值过程转变为执行计划

function delayLog(msg, cb) {
  setTimeout(() => {
    console.log(msg);
    cb && cb();
  }, 1000);
}
// delayLog('cb1', ()=> {
//     delayLog('cb2', )
// })

// 关键点是无法确定cb函数 所以通过一次科里化变幻将可以可确定和不可确定的分开

const delayLogThunk = (msg) => (cb) => delayLog(msg, cb);

const p1 = delayLogThunk("T1");
const p2 = delayLogThunk("T2");
const p3 = delayLogThunk("T3");
const p4 = delayLogThunk("T4");

// p1(() => p2())

const gen =
  ([first, second]) =>
  () =>
    first(() => second());
// gen([p1, p2])();

const gen2 = (args) => 
  () => args.reduceRight((a, b) => () => b(() => a()))();
gen2([p1, p2, p3, p4])();
