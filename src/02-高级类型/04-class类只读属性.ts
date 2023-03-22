// readonly表示只读，防止在构造函数之外对属性进行赋值
// 使用readonly关键字只能修饰属性而不能修饰方法
class Person {
  readonly age: number
  // 如果使用readonly修饰的属性没有类型注解，则属性的类型为字面量类型
  // 可见性修饰符需放在只读修饰符前面
  public readonly name = "Willxhp"
  readonly gender: string = '男' // 此时gender的类型为string

  constructor(age: number, name: 'Willxhp') {
    this.age = age
    this.name = name
  }
  // 不能在constructor以外修改只读属性
  // setAge(age: number) {
  //   this.age = age
  // }
}

// readonly还可以用于接口或者{}表示的对象类型，表示属性不可修改
interface Animal {
  readonly name: string
}
const dog: Animal = {
  name: '哈士奇'
}
// dog.name = '柯基' // 报错

const obj: { readonly x: number } = {
  x: 1
}
// obj.x = 2 // 报错