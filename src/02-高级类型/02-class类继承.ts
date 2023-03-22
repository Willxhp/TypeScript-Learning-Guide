// ts中class类继承有两种方式
// 1. extends继承父类
class Animal {
  move() {
    console.log('move')
  }
}

class Dog extends Animal {
  name = '哈士奇'
  bark() {
    console.log('bark')
  }
}

const dog = new Dog()
dog.move()
dog.bark()

// 2. implements实现接口
// 实现接口意味着类中必须提供接口中指定的所有方法和属性
interface Singable {
  sing(): void
  name: string
}

class Person implements Singable {
  name: string
  constructor(name: string) {
    this.name = name
  }
  sing() {
    console.log('sing song')
  }
}