// 类型系统共有两种：结构化类型系统和标明类型系统
// ts采用的是结构化类型系统，也叫作鸭子系统，类型检查关注的是值所具有的形状
// 即在结构类型系统中，如果两个对象具有相同的形状，则认为它们属于同一类型
class Point {
  x: number = 1
  y: number = 2
}
class Point2D {
  x: number = 1
  y: number = 2
}
// ts是结构化类型系统，只检查Ponit和Point2D的结构是否相同（都具有x和y属性，且属性类型也相同） 
// 如果在标明类型系统中，如C#或Java，它们是不同的类，类型无法兼容
const p: Point = new Point2D()

// 1. 类之间的类型兼容性
// 对于class类来说，y的成员至少与x相同，则x兼容y，即成员多的可以赋值给成员少的
class Point3D {
  x: number = 1
  y: number = 2
  z: number = 3
}
// Point3D的成员至少与Point相同，则Point兼容Point3D
const p1: Point2D = new Point3D()
// const p2: Point3D = new Point2D() // 报错

// 2. 接口之间的类型兼容性
// 接口之间的兼容性类似于class
interface newPoint {
  x: number
  y: number
}
interface newPoint2D {
  x: number
  y: number
}
interface newPoint3D {
  x: number
  y: number
  z: number
}
let np1: newPoint = {
  x: 1,
  y: 2
}
let np2: newPoint2D = {
  x: 1,
  y: 2
}
let np3: newPoint3D = {
  x: 1,
  y: 2,
  z: 3
}
np1 = np2
np2 = np3
// np3 = np2 // 报错

// 3. class与接口之间也可以兼容
let p3: newPoint2D = new Point3D()

// 类和接口都是约束了对象之间的类型兼容性，规则都是相同的
let obj2 = {
  x: 1,
  y: 2,
  z: 3
}
let obj1: {
  x: number
  y: number
} = obj2

// 注意：通过字面量给对象赋值的时候，对象类型的兼容性不生效，对象字面量只能指定已知属性，所以以下写法会报错
// let obj: { x: number, y: number } = { x: 1, y: 2, z: 3 } // 报错
// let obj: { x: number, y: number }
// obj = { x: 1, y: 2, z: 3 } // 报错