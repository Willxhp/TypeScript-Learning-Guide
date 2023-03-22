// ts中的class不仅有js中的class作用，还作为类型
class Person {
  // 实例属性
  age: number
  gender = '男' // 指定实例属性默认值
  // gender: string = '男'

  // 构造函数不能指定返回值类型
  constructor(age: number) {
    this.age = age
  }
}

const p = new Person(18)
console.log(p.age, p.gender)

class Point {
  x = 1
  y = 2

  // 实例方法
  scale(n: number): void {
    this.x *= n
    this.y *= n
  }
}

const point = new Point()
console.log(point.x, point.y)