function say() {
  console.log('我的家乡' + this.name)
}

// window.say()
// // 对象
// var bj = {
//   name : '北京',
//   say
// }

类 => 实例化的 => 对象
// function City(name) {
//   this.name = name
// }
// City.prototype.say = say

class City{
  constructor(name) {
    this.name = name
  }
  say() {
    console.log('我的家乡' + this.name)
  }
}

const bj = new City('北京')


// window.name = '中国'
// say()
bj.say()