//1、原型链继承
//让一个构造函数的原型是另一个类型的实例，那么这个构造函数new出来的实例就具有该实例的属性
// function Parent() {
//   this.show = true
//   this.info = {
//     name: 'abc',
//     age: 18
//   }
// }
//
// Parent.prototype.getInfo = function () {
//   console.log(this.info)
//   console.log(this.show)
// }
//
// function Child() {
// }
//
// Child.prototype = new Parent()
//
// let child1 = new Child()
//
// child1.info.gender = '男'
// child1.getInfo()


//2、借用构造函数继承
//在子类构造函数内部调用父类构造函数 使用apply或者call 将父类构造函数绑定在子对象上
//优点：解决了原型链继承不能想父类传参的问题和父类原型共享的问题
//缺点：借用构造函数的缺点是方法都在构造函数中定义 因此无法实现函数复用
//在父类的原型中定义的方法 对子类而言也是不可见的 结果所有类型都只能使用构造函数模式
// function Parent(gender) {
//   this.info = {
//     name: 'abc',
//     age: 19,
//     gender: gender
//   }
// }
//
// function Child(gender) {
//   Parent.call(this, gender)
// }
//
// let children = new Child('男')
// children.info.nickName = 'jjj'
// console.log(children.info)
//
// let children2 = new Child('女')
// console.log(children2.info)


//3、组合式继承将原型链 和 构造函数 组合到一起 使用原型链对属性和方法的继承
//而又通过借用构造函数来实现对实例属性的继承 即通过在原型上定义的方法实现函数复用
//又保证来每个实例都有自己的属性


/**
 * 优点：解决了原型链继承和构造函数继承造成的影响
 * 缺点：无论在什么情况下都会调用两次父类的构造方法
 * 一次是在创建子类的原型的时候 另一次是在子类构造函数内部
 * @param gender
 * @constructor
 */

// function Person(gender) {
//   console.log('执行次数')
//   this.info = {
//     name: '222',
//     age: 19,
//     gender: gender
//   }
// }
//
// Person.prototype.getInfo = function () {
//   console.log(this.info.name, this.info.age)
// }
//
// function Child(gender) {
//   Person.call(this, gender)
// }
//
// Child.prototype = new Person()
//
// let children = new Child('男')
// children.info.nickName = 'xxx'
// children.getInfo()
// console.log(children.info)


//4、es6 Class实现继承
//class通过extends关键字 实现继承 其实质是先创造出父类的this对象
//然后用子类的构造函数修改this
//在子类中 必须调用super关键字 且只有调用了super时候才能使用this
//因为子类的this对象是继承父类的this对象 然后对其进行加工
//而super() 方法表示父类的构造函数 用来新建父类的this对象
  //优点：语法简单 易懂 操作方便
  //缺点：并不是所有的浏览器都支持class关键字

class Animal {
  constructor(kind) {
    this.kind = kind
  }

  getKind() {
    return this.kind
  }
}

class Cat extends Animal {
  constructor(name) {
    super('cat');
    this.name = name
  }

  getCatInfo() {
    console.log(this.name + ":", super.getKind())
  }
}

const cat = new Cat('biubiubiu')
cat.getCatInfo()
