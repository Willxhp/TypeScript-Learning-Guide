// ts可以控制class的方法或属性对于class外的代码是否可见
// 可见修饰符包括：1. public 2. protected 3. private

// public是默认值，表示方法或属性可以在任何地方访问
// protected表示方法或属性仅可在类和子类中（非实例对象）可见
// private表示方法或属性仅在当前类中可见，在子类或实例对象中不可见
class Animal {
  public move() {
    console.log('move')
    this.run()
    this.__run__()
  }
  protected run() {
    console.log('run')
  }
  private __run__() {
    console.log('fly')
  }
}
const a = new Animal()
a.move()
// a.run() // 报错

class Dog extends Animal {
  bark() {
    console.log('bark')
    this.run()
    // this.__run__() // 报错
  }
}
const d = new Dog()
d.move()
d.bark()
// d.run() // 报错