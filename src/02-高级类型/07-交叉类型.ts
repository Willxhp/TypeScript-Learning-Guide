// 交叉类型的功能类似于接口继承extends，用于组合多个类型为一个类型，常用于对象类型
interface Person {
  name: string
}
interface Contact {
  phone: string
}
type PersonDetail = Person & Contact
let person: PersonDetail = {
  name: 'Willxhp',
  phone: '123'
}

// 交叉类型与接口继承的对比
// 相同点：两者都可以实现对象类型的组合
// 不同点：两者方式实现类型组合时，对于同名属性之间，处理类型冲突的方式不同
interface A {
  a: number
  fn: (value: number) => void
}
// 接口继承会报错
// interface B extends A {
//   a: string
//   fn: (value: string) => string
// }
interface B {
  a: string
  fn: (value: string) => string
}
type C = A & B
let temp !: never
let c: C = {
  fn(value) {
    return ''
  },
  a: temp // a既是number又是string，所以只能是never
} 
// fn 可以理解为(value: number | string) => string
c.fn(1)
c.fn('1')
// c.fn(true)